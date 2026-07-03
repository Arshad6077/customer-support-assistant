from database import SessionLocal
from models import Complaint

db = SessionLocal()

complaints = db.query(Complaint).all()

print("\n===== Complaints in Database =====\n")

for complaint in complaints:
    print(f"Ticket ID : {complaint.ticket_id}")
    print(f"Name      : {complaint.name}")
    print(f"Email     : {complaint.email}")
    print(f"Complaint : {complaint.complaint}")
    print(f"Category  : {complaint.category}")
    print(f"Priority  : {complaint.priority}")
    print(f"Summary   : {complaint.summary}")
    print(f"Status    : {complaint.status}")
    print("-" * 50)

db.close()