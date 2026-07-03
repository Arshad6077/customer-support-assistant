from sqlalchemy import Column, Integer, String, Text

from database import Base


class Complaint(Base):
    __tablename__ = "complaints"

    id = Column(Integer, primary_key=True, index=True)

    ticket_id = Column(String, unique=True, index=True)

    name = Column(String)

    email = Column(String)

    complaint = Column(Text)

    category = Column(String)

    priority = Column(String)

    summary = Column(Text)

    status = Column(String, default="Open")