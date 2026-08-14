import os
import resend
from dotenv import load_dotenv

# Ensure environment variables are loaded from backend/.env regardless of CWD
env_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), '.env')
load_dotenv(dotenv_path=env_path)
load_dotenv()

def send_contact_email(name, visitor_email, message_text):
    api_key = (os.environ.get('RESEND_API_KEY') or '').strip()
    receiver_email = (
        os.environ.get('CONTACT_RECEIVER_EMAIL') or 
        os.environ.get('PORTFOLIO_EMAIL') or 
        'shalinirichhariya01@gmail.com'
    ).strip()
    from_email = (os.environ.get('RESEND_FROM_EMAIL') or 'Portfolio Contact <onboarding@resend.dev>').strip()

    if not api_key:
        raise RuntimeError("RESEND_API_KEY is not configured in environment variables.")

    if not receiver_email:
        raise RuntimeError("CONTACT_RECEIVER_EMAIL is not configured in environment variables.")

    resend.api_key = api_key

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

    response = resend.Emails.send(params)

    # Verify Resend accepted the email and returned a valid message ID
    email_id = None
    if isinstance(response, dict):
        email_id = response.get('id')
    elif hasattr(response, 'id'):
        email_id = getattr(response, 'id')

    if not email_id:
        raise RuntimeError(f"Resend API did not return a valid email ID: {response}")

    print(f"[RESEND] Email successfully sent (ID: {email_id})")
    return True
