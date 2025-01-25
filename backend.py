import random
from flask import Flask, request, jsonify
from flask_cors import CORS
# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Expanded responses dictionary with more topics and variations
responses = {
    "greeting": ["Hello!", "Hi there!", "Hey! How can I help you?", "Hi! Nice to meet you."],
    "farewell": ["Goodbye!", "See you later!", "Take care!", "Bye! Have a great day!"],
    "thanks": ["You're welcome!", "No problem!", "Happy to help!", "Anytime!"],
    "help": [
        "Sure, I can assist you. What do you need help with?",
        "I'm here to help! Please ask your question.",
        "Let me know what you need help with, and I'll do my best to assist."
    ],
    "weather": [
        "I'm not connected to live weather data, but it's always a good idea to check your local forecast.",
        "I can't check the weather, but you can try a weather app or website.",
        "It depends on your location! Can you specify where you are?"
    ],
    "number": ["+91 8777351046", "+91 8777351046", "+91 8777351046"],
    "default": ["I'm not sure I understand. Can you please rephrase?", "Hmm, I didn't get that. Could you clarify?", "Let's try that again. What can I do for you?"]

}

def get_response(message):
    """
    Get a chatbot response based on the input message.
    """
    key = "default"
    # Map message keywords to response categories
    if any(word in message.lower() for word in ["hello", "hi", "hey"]):
        key = "greeting"
    elif any(word in message.lower() for word in ["bye", "goodbye", "see you"]):
        key = "farewell"
    elif any(word in message.lower() for word in ["thanks", "thank you", "thx"]):
        key = "thanks"
    elif any(word in message.lower() for word in ["help", "assist", "support"]):
        key = "help"
    elif any(word in message.lower() for word in ["weather", "forecast", "rain"]):
        key = "weather"
    elif any(word in message.lower() for word in ["number", "whatsapp number", "contact number"]):
        key = "number"
   
    return random.choice(responses[key])

@app.route('/chat', methods=['POST'])
def chat():
    """
    Handle chat messages by providing chatbot responses.
    """
    try:
        # Get the message from the request
        data = request.json
        message = data.get('message', '').strip()

        # If the message is empty, return an error message
        if not message:
            return jsonify({"response": "Please type a message!"}), 400

        # Get the chatbot's response
        response = get_response(message)

        # Return the response as JSON
        return jsonify({"response": response})

    except Exception as e:
        # Return error message if something goes wrong
        return jsonify({"response": f"An error occurred: {str(e)}"}), 500

if __name__ == '__main__':
    # Run the Flask app on port 8000
    app.run(debug=True, port=8000)