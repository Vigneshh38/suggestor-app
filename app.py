# File: app.py
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from data_models import QUESTIONS, CAREERS
from logic import calculate_user_profile, find_matching_careers
from gemini_integration import get_career_description_from_gemini, configure_gemini
import os
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Allow all origins for testing

@app.route('/')
def home():
    print("Serving index.html")
    return send_from_directory('.', 'index.html')

@app.route('/styles.css')
def serve_css():
    print("Serving styles.css")
    return send_from_directory('.', 'styles.css')

@app.route('/script.js')
def serve_js():
    print("Serving script.js")
    return send_from_directory('.', 'script.js')

@app.route('/image.png')
def serve_image():
    print("Attempting to serve image.jpg from:", os.getcwd())  # Add this line
    return send_from_directory('.', 'image.png')

@app.route('/college.jpg')
def serve_overlay():
    print("Serving 1.png")
    return send_from_directory('.', 'college.jpg')

@app.route('/get-questions', methods=['GET'])
def get_questions():
    print("Serving questions:", len(QUESTIONS), "questions")
    return jsonify(QUESTIONS)

@app.route('/submit-answers', methods=['POST'])
def submit_answers():
    data = request.json
    if not data or 'answers' not in data:
        return jsonify({"error": "Missing 'answers' in request body"}), 400
    user_answers = data['answers']
    if not isinstance(user_answers, dict):
        return jsonify({"error": "'answers' should be an object/dictionary"}), 400
    print(f"Received answers: {user_answers}")
    try:
        user_profile = calculate_user_profile(user_answers)
        print(f"Calculated profile: {user_profile}")
        suggestions = find_matching_careers(user_profile)
        print(f"Suggestions: {suggestions}")
        formatted_suggestions = [
            {
                'id': suggestion['id'],
                'name': suggestion['name'],
                'match_score': round(suggestion['match_score'], 2),
                'description': get_career_description_from_gemini(suggestion['name'])
            }
            for suggestion in suggestions
        ]
        return jsonify({
            "user_profile": user_profile,
            "suggestions": formatted_suggestions
        })
    except Exception as e:
        app.logger.error(f"Error processing /submit-answers: {e}", exc_info=True)
        return jsonify({"error": "An internal server error occurred."}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)