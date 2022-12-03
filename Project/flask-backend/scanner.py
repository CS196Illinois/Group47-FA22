import cv2
import pytesseract

class Scanner:
    def scan(self, photo): 
        # use opencv to read the text from the image
        # defaultfilepath = 'desmos_copy.png'
        image = cv2.imread(photo)
        gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
        rawtext = pytesseract.image_to_string(gray, lang="eng").lower()

        # isolate the ingredients section
        colonIndex = rawtext.find(":")
        periodIndex = rawtext[colonIndex:].find(".")
        ingredientsOnly = rawtext[colonIndex+2:colonIndex+periodIndex]

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