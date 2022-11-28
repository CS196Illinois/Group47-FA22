import cv2
import pytesseract
import os

class Scanner:
    def scan(self, path): 
        # use opencv to read the text from the image
        print("Image Path is " + path)
        photo = path
        defaultfilepath = 'desmos_copy.png'
        image = cv2.imread(path)
        gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
        rawtext = pytesseract.image_to_string(gray, lang="eng").lower()

        # isolate the ingredients section
        colonIndex = rawtext.find(":")
        periodIndex = rawtext[colonIndex:].find(".")
        print(rawtext)
        ingredientsOnly = rawtext[colonIndex+2:colonIndex+periodIndex]
        print(ingredientsOnly)

        #remove filler words/symbols
        #ingredientsOnly = ingredientsOnly.replace("*", "")
        ingredientsOnly = ingredientsOnly.replace("\n", " ")
        ingredientsOnly = ingredientsOnly.replace("™", "")
        ingredientsOnly = ingredientsOnly.replace(", and ", ",")
        ingredientsOnly = ingredientsOnly.replace(" and ", ",")

        #split by commas
        ingredientsList = ingredientsOnly.split(",")

        #remove leading and trailing whitespace from each ingredient
        ingredientsList = [ingredient.strip() for ingredient in ingredientsList]

        #Ingredient end check:
        #remove any asterisked statements (not real ingredients)
        lastCutoff = -1
        for index, ingredient in enumerate(ingredientsList):
            cutoff = ingredient.find("*")
            if (cutoff != -1):
                ingredientsList[index] = ingredient[:cutoff]
                lastCutoff = index
            
        #find final item in List with a asterisk and delete "ingredients" after it
        if (lastCutoff != -1):
            del ingredientsList[lastCutoff+1:]
        return ingredientsList
        #for ingredient in ingredientsList:
            #match each ingredient to the database
            #print("Ingredient: " + ingredient)