import easyocr
from torch import true_divide
reader = easyocr.Reader(['en'])

#-------------- Printing ingredients of the orange juice nutrition label ----------------
nutritionLabel = reader.readtext("/Users/Thea/CS 196/Group47-FA22/orange-juice-label.png")


nutritionInfo = []
ingredients = []
colonFound = False

# Populating nutritionInfo list with all of the info on the nutrition label
for info in nutritionLabel:
  nutritionInfo.append(info[1])

# Finding a colon (signifies that "Ingredients" was found) and appending
# to a separate list called ingredients
for item in nutritionInfo:
  if ":" in item:
    colonFound = True
    if colonFound: 
      ingredients.append(item)

# Prints the ingredients list in all lowercase 
for ingredient in ingredients:
  print(ingredient.lower())





