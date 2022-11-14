from flask import Flask
from flask_cors import CORS
from scanner import Scanner

app = Flask(__name__)
CORS(app)

# Members API Route
@app.route('/members')
def members():
    return {"members": ["Member10", "Member2", "Member3"]}

@app.route('/')
def index():
    return {"hi": "ethan"}

@app.route('/scan')
# define a funnction that takes in a picutre, converts it to a string, and calls the api function to return the nutrition facts
# api function: takes in a string of converted text, fetches it info from the database, and returns the nutrition facts
# construct a json object with the nutrition facts
# have front end fetch the json object and display the nutrition facts
def scan():
    scanner = Scanner()
    return {"ingredients": scanner.scan()}

if __name__ == '__main__':
    app.run(debug=True, port=8000)