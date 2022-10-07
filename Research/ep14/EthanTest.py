import easyocr
import cv2
import pytesseract

# use easyocr to read the image
reader = easyocr.Reader(['en'])

# Problems with code: Doesn't filter out text after Ingredients: keyword has been found
# Possible solution: look for a period and once found, stop returning words
# Problem with solution: easyocr is not identifying the periods

#label = reader.readtext("/content/ingredients label 1.png")
label = reader.readtext("EthanTest.png")
print(label)
# Construct a list of strings containing all the words on the label 
wordBlocks = []
for element in label: # Populate list
  wordBlocks.append(element[1])
print("---------------------") # delimiter

ingredientsList = [] # List of ingredients

afterIngredients = False
for wordBlock in wordBlocks: # Searching for the "Ingredients:"
  if ":" in wordBlock:
    afterIngredients = True
  if afterIngredients: # Print/add remaining words (any words that appear physically after Ingredients:)
    # print(wordBlock)
    ingredientsList.append(wordBlock)

print(ingredientsList)
ingredientsString = ""
ingredientsString = ingredientsString.join(ingredientsList) # Creating a joint string to get rid of the awkward "word blocks"
print(ingredientsString)