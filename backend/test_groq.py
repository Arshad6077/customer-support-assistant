from dotenv import load_dotenv
import os

from langchain_groq import ChatGroq
from langchain_core.messages import HumanMessage

# Load environment variables
load_dotenv()

# Read API Key
groq_api_key = os.getenv("GROQ_API_KEY")

# Create LLM
llm = ChatGroq(
    model="llama-3.3-70b-versatile",
    api_key=groq_api_key
)

# Ask a question
complaint = """
My payment was deducted twice, but my order was never confirmed.
"""

prompt = f"""
You are an AI Customer Support Assistant.

Analyze the following complaint.

Complaint:
{complaint}

Return ONLY in this format:

Category:
Priority:
Summary:
"""

response = llm.invoke([
    HumanMessage(content=prompt)
])

print(response.content)