import os
from flask import Flask, redirect, url_for, request, flash
from flask_cors import CORS
from scanner import Scanner
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app)

ingredientsList = {"ingredients": "Apples"}

# Members API Route
@app.route('/members')
def members():
    return {"members": ["Member10", "Member2", "Member4"]}

@app.route('/')
def index():
    return {"hi": "ethan"}

@app.route('/ingredients', methods = ['POST', 'GET'])
def ingredients():
    # if request.method == 'POST':
    if request.method == "POST":
        print(request.data)
        print(request.json)
        print(request.json['ingredients'])
        ingredientsList['ingredients'] = request.json['ingredients']
        return request.json
    else:
        return ingredientsList

@app.route('/scan', methods = ['POST', 'GET'])
# define a funnction that takes in a picture, converts it to a string, and calls the api function to return the nutrition facts
# api function: takes in a string of converted text, fetches it info from the database, and returns the nutrition facts
# construct a json object with the nutrition facts
# have front end fetch the json object and display the nutrition facts
def scan():
    scanner = Scanner()
    if request.method == 'POST':
        savedPhoto = open('savedPhoto.png', 'w')
        savedPhoto.write(request.files)
        savedPhoto.close()
        result = scanner.scan('savedPhoto.png')
        print(result)
        return request.json['files']
    else:
        return {"hi": "ethan"}

if __name__ == '__main__':
    app.run(debug=True, port=8000)