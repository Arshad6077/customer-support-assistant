from fastapi_mail import FastMail, MessageSchema, MessageType

from email_config import conf


async def send_email(receiver_email, subject, body):

    message = MessageSchema(
        subject=subject,
        recipients=[receiver_email],
        body=body,
        subtype=MessageType.plain,
    )

    fm = FastMail(conf)

    await fm.send_message(message)