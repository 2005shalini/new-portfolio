import os
from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from routes.contact import contact_bp

# Load environment variables from .env if present
load_dotenv()

app = Flask(__name__)

# Configure CORS for frontend development origins
CORS(app, resources={
    r"/api/*": {
        "origins": [
            "http://localhost:5173",
            "http://127.0.0.1:5173"
        ]
    }
})

# Register Blueprints
app.register_blueprint(contact_bp, url_prefix='/api')

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({
        "success": True,
        "message": "Portfolio backend is running"
    }), 200

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='127.0.0.1', port=port, debug=True)
