
# %%
from PIL import Image
import pytesseract #(can't get it to work with the relative path of tesseract.exe in virutal environment)
import numpy as np
import cv2
import re

pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe' # Path of tesseract.exe on your local computer (you'll have to install it outside the VEM) 
#NOT WORKING
# pytesseract.pytesseract.tesseract_cmd = r'C:\Users\Banks\Desktop\CS124H\Group47-FA22\Project\backend\Scripts\pytesseract.exe' # Copy full path of pytesseract.exe inside scripts or bin folder

class Scanner:
    
    # %%
    def show_image(self, img):
        cv2.imshow('img', img)
        cv2.waitKey()
        cv2.destroyAllWindows()

    # %%
    def get_text(self, img):
        return pytesseract.image_to_string(np.array(img))

    # %%
    def cutString(self, string, character, after = True, reverse = False):
        """
        This function returns a cut down string, dictated by the character inputted. 
        The after parameter specifies if you want the string after or before the character
        The reverse parameter specifies if you want to search the String starting from reverse
        
        Note: The reverse tag is just a setting for where to start, the 'after' parameter is always 
        relative to the default state of the string.
        
        """

        offset = len(character) 
        
        if reverse:
            
            after = not after
            reverse_string = string[::-1]
            
            
            character_index = reverse_string.find(character)
            
            if character_index == -1:
                return string
            
            if after:
                output_string = reverse_string[character_index + offset:]
            else:
                output_string = reverse_string[:character_index]
        
            
            return output_string[::-1]
            
        else:
            character_index = string.find(character)
            if character_index == -1:
                return string
            
            if after:
                output_string = string[character_index + offset:]
            else:
                output_string = string[:character_index]
                
            return output_string

    # %%
    def removeExtra(self, string):
    #     print("\n" + string)
        string = self.cutString(string, ":", False)
    #     print("\n" + string)
        string = self.cutString(string, "**", False, True)
    #     print("\n" + string)
        string = self.cutString(string, "*", False, True)
    #     print("\n" + string)
        string = self.cutString(string, ".", False, True)
    #     print("\n" + string)
        
        return string

    # %%
    def removeSpecialCharacters(self, string):
        """Returns a string without most special characters, aside from hyphens and commas
        A complete list of characters removed is on the first line"""
        
        #remove special characters except ' '  '-' ','
        
        remove = """!"#$&'*+:;<=>?@\^_`{|}~™’""" #Excluded: '-' ',' '/' '(' '[' ')' ']' '.' '%'
        

        pattern = r"[{}]".format(remove) # create the pattern
        
        #take out escape characters
        string = string.replace("\n", " ")
        
        filtered_string = re.sub(pattern, "", string)
        
        #Manual exceptions that need filtering
        filtered_string = filtered_string.replace(", and", "splitcomma")
        filtered_string = filtered_string.replace(" and ", "splitcomma")
        filtered_string = filtered_string.replace(", and ", "splitcomma")

        filtered_string = filtered_string.replace("  ", " ")
        

        
        #Parenthesis management
        filtered_string = self.formatParenthesis(filtered_string)
        
        
        #Turn commas in parenthesis into commas, and other ones into temporary state to later be split
        filtered_string = filtered_string.replace(",", "splitcomma")
        filtered_string = filtered_string.replace("realcomma", ",")
        
        return filtered_string
        

    # %%
    def ethanProcessing(self, string):
        
        #Filter the string
        filtered_string = self.removeSpecialCharacters(string)

        #split by commas
        ingredientsList = filtered_string.split("splitcomma")

        #Remove Blanks
        ingredientsList[:] = [x for x in ingredientsList if x]

        #remove leading and trailing whitespace from each ingredient
        ingredientsList = [ingredient.strip() for ingredient in ingredientsList]
        
        return ingredientsList

    # %%
    def getIngredients(self, img):
        
        #text from pytesseract processing
        text = self.get_text(img)
    #     print(text)
        
        #lowercase
        rawtext = text.lower()
        # print(rawtext)
        
        #Find the start of the ingredients (WIP)
        if "ingredients:" in rawtext:
            colonIndex = rawtext.find("ingredients:")
            offset = 13
    #         print(f"ingredients: with offset {offset}")
        elif "ts:" in rawtext:
            colonIndex = rawtext.find("ts:")
            offset = 4
    #         print(f"ts: with offset {offset}")
        elif "s:" in rawtext:
            colonIndex = rawtext.find("s:")
            offset = 3
    #         print(f"s: with offset {offset}")
        elif ":" in rawtext:
    #         print("Can't find variant of 'ingredients:', going with next best ':'")
            print("WARNING : POTENTIALLY INNACURATE RESULTS")
            colonIndex = rawtext.find(":")
            offset = 4
            print(f": with offset {offset}")
        else:
            print("Can't find variant of 'ingredients:' nor ':'")
            print("UNABLE TO CONTINUE")
            return
            
        #Start the string with only ingredients
        ingredientsOnly = rawtext[colonIndex+offset:]
    #     print(ingredientsOnly)
        
        #Removes : ** * .   in that order aswell as anything following those symbols
        output = self.removeExtra(ingredientsOnly)
    #     print(output)
        
        
        #Ethans code (removes special characters, splits commas, turns result into a list)
        ingredientsList = self.ethanProcessing(output)
        
        return ingredientsList
        

    # %%
    def formatParenthesis(self, string):
        """This function looks for the beginning of a parenthesis, and deletes all commas until the parenthesis closes"""
        return_string = ''
        count = 0

        #Iterate character by character through string
        for i in string:
            
            #Find and count when a bracket/parenthesis starts
            if i == '[':
                count += 1
                return_string += i
            elif i == '(':
                count += 1
                return_string += i
            #Find and count when a bracket/parenthesis ends
            elif i == ']' and count > 0:
                count -= 1
                return_string += i
            elif i == ')'and count > 0:
                count -= 1
                return_string += i
                
            #Don't count any commas that happen between parenthesis/brackets
            elif i == ',' and count > 0:
                return_string += 'realcomma'

            else:
                return_string += i
            

        return return_string
            

    # %%
    def nicelyFindAndResults(self, img, grayScale = False):
        # return "Test string"

        #Grayscal the image
        if grayScale:
            img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        
        ingredientsList = self.getIngredients(img)
        for ingredient in ingredientsList:
            #match each ingredient to the database
            print("Ingredient: " + ingredient)
        return ingredientsList

    # %%
    def testImage(self):
        filepath = 'label5.png'
        img1 = cv2.imread(filepath)
        return self.nicelyFindAndResults(img1)

    # # %%
    # #Main Code
    # nicelyFindAndResults(img1)
    # # show_image(img1)





