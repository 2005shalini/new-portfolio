import re
from flask import Blueprint, request, jsonify
from services.email_service import send_contact_email

contact_bp = Blueprint('contact', __name__)

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')

def validate_contact_data(data):
    if not isinstance(data, dict):
        return False

    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    # Check name validation
    if not name or not isinstance(name, str) or not name.strip() or len(name) > 100:
        return False

    # Check email validation
    if not email or not isinstance(email, str) or not email.strip() or len(email) > 150:
        return False
    if not EMAIL_REGEX.match(email.strip()):
        return False

    # Check message validation
    if not message or not isinstance(message, str) or not message.strip() or len(message) > 2000:
        return False

    return True

@contact_bp.route('/contact', methods=['POST', 'OPTIONS'])
def handle_contact():
    if request.method == 'OPTIONS':
        return jsonify({"success": True}), 200
    try:
        data = request.get_json(silent=True)

        if not data or not validate_contact_data(data):
            return jsonify({
                "success": False,
                "message": "Please provide valid name, email, and message."
            }), 400

        name = data.get('name').strip()
        email = data.get('email').strip()
        message = data.get('message').strip()

        # Send email notification via SMTP
        send_contact_email(name, email, message)

        return jsonify({
            "success": True,
            "message": "Message sent successfully."
        }), 200

    except Exception as e:
        # Catch any SMTP or environment error without leaking internal details to client
        print(f"[CONTACT ERROR] Email delivery failed: {type(e).__name__} - {e}")
        return jsonify({
            "success": False,
            "message": "Unable to send message. Please try again later."
        }), 500
