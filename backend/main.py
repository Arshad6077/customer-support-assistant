from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from dotenv import load_dotenv
import os

from langchain_groq import ChatGroq
from langchain_core.messages import HumanMessage

from database import engine
from database import SessionLocal

from models import Base

from crud import (
    create_complaint,
    get_complaint_by_ticket,
    get_all_complaints,
    update_complaint_status,
)

import uuid

from email_service import send_email

app = FastAPI()

# Create database tables
Base.metadata.create_all(bind=engine)

# Load environment variables
load_dotenv()

# Read the API key
groq_api_key = os.getenv("GROQ_API_KEY")

# Create the Groq LLM
llm = ChatGroq(
    model="llama-3.3-70b-versatile",
    api_key=groq_api_key
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Complaint(BaseModel):
    name: str
    email: EmailStr
    complaint: str

class StatusUpdate(BaseModel):
    status: str


@app.get("/")
def home():
    return {"message": "Customer Support Backend Running"}


@app.post("/submit-complaint")
async def submit_complaint(data: Complaint):

    if (
        data.name.strip() == "" or
        data.email.strip() == "" or
        data.complaint.strip() == ""
    ):
        raise HTTPException(
    status_code=400,
    detail="All fields are required."
)

    prompt = f"""
You are an AI Customer Support Assistant.

Analyze the following customer complaint.

Complaint:
{data.complaint}

Return ONLY in this format:

Category: <category>
Priority: <priority>
Summary: <summary>
"""

    response = llm.invoke([
        HumanMessage(content=prompt)
    ])

    ai_response = response.content

    # Default values
    category = "Unknown"
    priority = "Medium"
    summary = ai_response

    # Extract AI output
    for line in ai_response.split("\n"):
        if line.startswith("Category:"):
            category = line.replace("Category:", "").strip()

        elif line.startswith("Priority:"):
            priority = line.replace("Priority:", "").strip()

        elif line.startswith("Summary:"):
            summary = line.replace("Summary:", "").strip()

    # Generate Ticket ID
    ticket_id = "TKT-" + str(uuid.uuid4())[:8].upper()

    # Create database session
    db = SessionLocal()

    # Save complaint
    saved_complaint = create_complaint(
        db=db,
        ticket_id=ticket_id,
        name=data.name,
        email=data.email,
        complaint=data.complaint,
        category=category,
        priority=priority,
        summary=summary,
    )

    await send_email(
    receiver_email=data.email,
    subject="SkyKart - Complaint Received",
    body=f"""
Hello {data.name},

Thank you for contacting SkyKart.

Your complaint has been received successfully.

Ticket ID:
{saved_complaint.ticket_id}

Current Status:
{saved_complaint.status}

Please save this Ticket ID.
You'll need it to track your complaint.

Thank you,

SkyKart Customer Support
"""
)

    db.close()

    return {
        "message": "Complaint received successfully",
        "ticket_id": ticket_id,
        "customer_name": data.name,
        "email": data.email,
        "complaint": data.complaint,
        "category": category,
        "priority": priority,
        "summary": summary,
    }

@app.get("/track-ticket/{ticket_id}")
def track_ticket(ticket_id: str):

    db = SessionLocal()

    complaint = get_complaint_by_ticket(db, ticket_id)

    db.close()

    if complaint is None:
        return {
            "message": "Ticket not found"
        }

    return {
        "ticket_id": complaint.ticket_id,
        "customer_name": complaint.name,
        "email": complaint.email,
        "complaint": complaint.complaint,
        "category": complaint.category,
        "priority": complaint.priority,
        "summary": complaint.summary,
        "status": complaint.status
    }

@app.get("/complaints")
def get_complaints():

    db = SessionLocal()

    complaints = get_all_complaints(db)

    db.close()

    return [
        {
            "ticket_id": complaint.ticket_id,
            "customer_name": complaint.name,
            "email": complaint.email,
            "complaint": complaint.complaint,
            "category": complaint.category,
            "priority": complaint.priority,
            "summary": complaint.summary,
            "status": complaint.status,
        }
        for complaint in complaints
    ]

@app.put("/update-status/{ticket_id}")
async def update_status(ticket_id: str, data: StatusUpdate):

    db = SessionLocal()

    complaint = update_complaint_status(
        db,
        ticket_id,
        data.status
    )

    if complaint is not None:

        await send_email(
            receiver_email=complaint.email,
            subject="SkyKart - Complaint Status Updated",
            body=f"""
Hello {complaint.name},

Your complaint status has been updated.

Ticket ID:
{complaint.ticket_id}

New Status:
{complaint.status}

Thank you for choosing SkyKart.

SkyKart Customer Support
"""
        )

    db.close()

    if complaint is None:
        return {"message": "Ticket not found"}

    return {
        "message": "Status updated successfully",
        "ticket_id": complaint.ticket_id,
        "status": complaint.status,
    }

@app.get("/test-email")
async def test_email():

    await send_email(
        receiver_email="YOUR_GMAIL@gmail.com",
        subject="SkyKart Email Test",
        body="""
Congratulations!

Your SkyKart email service is working successfully.
"""
    )

    return {"message": "Email sent successfully"}