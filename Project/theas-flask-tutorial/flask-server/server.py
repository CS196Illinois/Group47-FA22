from flask import Flask;
from flask_cors import CORS;

app = Flask(__name__)

CORS(app)

# Members API route

@app.route("/members")
def members():
    return {"members": ["Member1", "Member2", "Member3"]}



@app.route("/")
def index():
    return {"thea": ["thea1", "thea2", "thea3"]}

if __name__ == "__main__":
    app.run(debug=True, port=5000)