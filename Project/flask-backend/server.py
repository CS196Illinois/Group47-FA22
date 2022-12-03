import base64
from flask import Flask, request
from flask_cors import CORS
from scanner import Scanner

app = Flask(__name__)
CORS(app)

# Default Ingredients List
ingredientsList = {"ingredients": "Apples"}
# Ingredients Route: For JSON POST request tests
@app.route('/ingredients', methods = ['POST', 'GET'])
def ingredients():
    if request.method == "POST":
        ingredientsList['ingredients'] = request.json['ingredients']
        return request.json
    else:
        return ingredientsList

@app.route('/scan', methods = ['POST', 'GET'])
# define a funnction that takes in a picture, converts it to a string, and calls the api function to return the nutrition facts
# api function: takes in a string of converted text, fetches it info from the database, and returns the nutrition facts
# construct a json object with the nutrition facts
# have front end fetch the json object and display the nutrition facts
# TODO: ABOVE METHODS NOT FULLY IMPLEMENTED YET
def scan():
    scanner = Scanner()
    if request.method == 'POST':
        # get the base64 encoded string
        im_b64 = request.json['myFile']
        # Split off the front identifier
        im_b64 = im_b64.split(',')[1]
        # Decode the base64 string and write it to a png file
        with open("savedPhoto.png", "wb") as fh:
            fh.write(base64.b64decode(im_b64))
        # Call the scanner function on the saved photo
        scanResult = scanner.scan("savedPhoto.png")
        # Create a text file with the scan result to be used in GET requests
        with open("result.txt", "w") as fh:
            fh.write('!@#'.join(scanResult))
        # Return the scan result as the POST response
        return scanResult
    else:
        # Read the scan result from the saved text file
        resultString = open("result.txt").read()
        # Split the string back into a list
        resultList = resultString.split("!@#")
        # Return the scan result as a list for GET resquests
        return resultList

if __name__ == '__main__':
    app.run(debug=True, port=8000)