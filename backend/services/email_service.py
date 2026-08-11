import os
import smtplib
from email.message import EmailMessage
from dotenv import load_dotenv

# Ensure environment variables are loaded from backend/.env regardless of CWD
env_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), '.env')
load_dotenv(dotenv_path=env_path)
load_dotenv()

def send_contact_email(name, visitor_email, message_text):
    portfolio_email = os.environ.get('PORTFOLIO_EMAIL', 'shalinirichhariya01@gmail.com')
    email_password = os.environ.get('EMAIL_PASSWORD', '').strip()
    smtp_server = os.environ.get('SMTP_SERVER', 'smtp.gmail.com')
    smtp_port = int(os.environ.get('SMTP_PORT', 587))

    # Raise explicit error if credentials are missing
    if not portfolio_email or not email_password:
        raise RuntimeError("Email service credentials (PORTFOLIO_EMAIL or EMAIL_PASSWORD) are not configured.")

    msg = EmailMessage()
    msg['Subject'] = f"New Portfolio Contact — {name}"
    msg['From'] = portfolio_email
    msg['To'] = portfolio_email
    msg['Reply-To'] = visitor_email

    body_content = f"Name: {name}\n\nEmail: {visitor_email}\n\nMessage:\n{message_text}"
    msg.set_content(body_content)

    with smtplib.SMTP(smtp_server, smtp_port, timeout=10) as server:
        server.starttls()
        server.login(portfolio_email, email_password)
        server.send_message(msg)

    return True
