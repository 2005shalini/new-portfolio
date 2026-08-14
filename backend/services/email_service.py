import os
import smtplib
from email.message import EmailMessage
from dotenv import load_dotenv

# Ensure environment variables are loaded from backend/.env regardless of CWD
env_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), '.env')
load_dotenv(dotenv_path=env_path)
load_dotenv()

def send_contact_email(name, visitor_email, message_text):
    """
    Sends a contact form notification email.
    Supports Resend HTTP API as well as Gmail SMTP SSL (port 465) with automatic fallback.
    Returns True only when the email is successfully accepted for delivery.
    """
    resend_key = (os.environ.get('RESEND_API_KEY') or '').strip()
    email_password = (os.environ.get('EMAIL_PASSWORD') or '').strip()
    receiver_email = (
        os.environ.get('CONTACT_RECEIVER_EMAIL') or 
        os.environ.get('PORTFOLIO_EMAIL') or 
        'shalinirichhariya01@gmail.com'
    ).strip()
    from_email = (os.environ.get('RESEND_FROM_EMAIL') or 'Portfolio Contact <onboarding@resend.dev>').strip()
    smtp_server = (os.environ.get('SMTP_SERVER') or 'smtp.gmail.com').strip()

    if not resend_key and not email_password:
        raise RuntimeError("No email service configured. Please set RESEND_API_KEY or EMAIL_PASSWORD in environment variables.")

    errors = []

    # 1. Attempt delivery via Resend HTTP API if RESEND_API_KEY is configured
    if resend_key:
        try:
            import resend
            resend.api_key = resend_key
            print(f"[EMAIL] Attempting delivery via Resend HTTP API to {receiver_email}...")
            
            params = {
                "from": from_email,
                "to": [receiver_email],
                "subject": f"New Portfolio Contact — {name}",
                "reply_to": visitor_email,
                "text": f"Name: {name}\nEmail: {visitor_email}\n\nMessage:\n{message_text}",
                "html": f"""
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px;">
                  <h2 style="color: #0f172a; margin-top: 0; font-size: 20px;">New Portfolio Contact Message</h2>
                  <p style="margin: 8px 0;"><strong>Name:</strong> {name}</p>
                  <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:{visitor_email}" style="color: #2563eb;">{visitor_email}</a></p>
                  <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
                  <p style="margin: 8px 0;"><strong>Message:</strong></p>
                  <div style="white-space: pre-wrap; background-color: #f8fafc; padding: 16px; border-radius: 6px; border: 1px solid #e2e8f0; font-size: 14px;">{message_text}</div>
                </div>
                """
            }
            res = resend.Emails.send(params)
            email_id = res.get('id') if isinstance(res, dict) else getattr(res, 'id', None)
            if email_id:
                print(f"[RESEND SUCCESS] Email delivered with ID: {email_id}")
                return True
            raise RuntimeError(f"Resend returned invalid response: {res}")
        except Exception as e:
            print(f"[RESEND WARNING] Resend delivery attempt failed: {type(e).__name__} - {e}")
            errors.append(f"Resend: {type(e).__name__} - {e}")

    # 2. Attempt delivery via Gmail SMTP SSL (port 465) if EMAIL_PASSWORD is configured
    if email_password:
        try:
            print(f"[EMAIL] Attempting delivery via Gmail SMTP SSL (465) to {receiver_email}...")
            msg = EmailMessage()
            msg['Subject'] = f"New Portfolio Contact — {name}"
            msg['From'] = receiver_email
            msg['To'] = receiver_email
            msg['Reply-To'] = visitor_email
            msg.set_content(f"Name: {name}\n\nEmail: {visitor_email}\n\nMessage:\n{message_text}")

            with smtplib.SMTP_SSL(smtp_server, 465, timeout=12) as server:
                server.login(receiver_email, email_password)
                server.send_message(msg)
            print(f"[SMTP SUCCESS] Email delivered via {smtp_server}:465")
            return True
        except Exception as e:
            print(f"[SMTP WARNING] Port 465 SSL delivery failed: {type(e).__name__} - {e}")
            errors.append(f"SMTP 465: {type(e).__name__} - {e}")

            # Fallback to port 587 STARTTLS
            try:
                print(f"[EMAIL] Attempting delivery via Gmail SMTP (587) to {receiver_email}...")
                with smtplib.SMTP(smtp_server, 587, timeout=12) as server:
                    server.starttls()
                    server.login(receiver_email, email_password)
                    server.send_message(msg)
                print(f"[SMTP SUCCESS] Email delivered via {smtp_server}:587")
                return True
            except Exception as e587:
                print(f"[SMTP WARNING] Port 587 STARTTLS delivery failed: {type(e587).__name__} - {e587}")
                errors.append(f"SMTP 587: {type(e587).__name__} - {e587}")

    raise RuntimeError(f"All email delivery methods failed: {'; '.join(errors)}")
