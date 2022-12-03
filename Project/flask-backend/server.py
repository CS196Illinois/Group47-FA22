import os
import io
import json
import base64
import logging
import numpy as np
from flask import Flask, redirect, url_for, request, flash, jsonify
from scanner import Scanner
from flask_cors import CORS
from PIL import Image

app = Flask(__name__)
CORS(app)

ingredientsList = {"ingredients": "Apples"}
getResult = ["Default"]

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
        # get the base64 encoded string
        im_b64 = request.json['myFile']
        im_b64 = im_b64.split(',')[1]
        with open("savedPhoto.png", "wb") as fh:
            fh.write(base64.b64decode(im_b64))
        scanResult = scanner.scan("savedPhoto.png")
        with open("result.txt", "w") as fh:
            fh.write('!@#'.join(scanResult))
        return scanResult
    else:
        resultString = open("result.txt").read()
        resultList = resultString.split("!@#")
        return resultList

if __name__ == '__main__':
    app.run(debug=True, port=8000)