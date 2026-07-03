from sqlalchemy.orm import Session

from models import Complaint


def create_complaint(
    db: Session,
    ticket_id: str,
    name: str,
    email: str,
    complaint: str,
    category: str,
    priority: str,
    summary: str,
):
    new_complaint = Complaint(
        ticket_id=ticket_id,
        name=name,
        email=email,
        complaint=complaint,
        category=category,
        priority=priority,
        summary=summary,
        status="Open",
    )

    db.add(new_complaint)
    db.commit()
    db.refresh(new_complaint)

    return new_complaint

def get_complaint_by_ticket(db: Session, ticket_id: str):
    return (
        db.query(Complaint)
        .filter(Complaint.ticket_id == ticket_id)
        .first()
    )

def get_all_complaints(db: Session):
    return db.query(Complaint).all()

def update_complaint_status(db: Session, ticket_id: str, status: str):

    complaint = (
        db.query(Complaint)
        .filter(Complaint.ticket_id == ticket_id)
        .first()
    )

    if complaint:
        complaint.status = status
        db.commit()
        db.refresh(complaint)

    return complaint