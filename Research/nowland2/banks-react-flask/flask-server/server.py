from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
# cors = CORS(app)
CORS(app)

# Members API  Route
@app.route("/members")
def members():
    return {"members" : ["Member1", "Member 2", "Member 3"]}
    # return 1


if __name__ == "__main__":
    app.run(debug=True)