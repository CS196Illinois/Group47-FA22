#Working Python 3.9.6 (was having issues with 3.10 and reader not being able to use numpy)

import easyocr
import cv2


img = cv2.imread(r"Research\nowland2\content\nutritionlabel.png")
# img1 = cv2.imread(r'Research\nowland2\content\nutritionlabel.png')
reader = easyocr.Reader(['en'])

results = reader.readtext(img)
# results1 = reader.readtext(img1)

#for element in results:
  #print(element[1])

# Worse Version (picture doesn't work too well with Computer Vision)

# Ingredients = False

# for element in results:
#   if element[2] > 0:

#     if ":" in element[1]:
#       Ingredients = True
#     if Ingredients:
#       if "," in element[1]:
#         split = element[1].split(",")
#         for word in split:
#           if word != "":
#             print(word)
#       else:
#         print(element[1])
#         #print(element[2])

# results = results1

Ingredients = False

def filteredPrint(str) :
  """
  This function returns the original string with the following edits: 
   - all lowercase 
   - no hyphens 
   - no trailing and leading spaces
   - autocorrected with "speller" from the "autocorrect" library
  """

  #pip install autocorrect
  #pip install regex

  from autocorrect import Speller 
  import re 


  spell = Speller(only_replacements=True) #Initalize spellecheck, with settings for correcting computer vision

  # print(str) #Print orignal String

  str = str.lower() #lowercase
  str = str.lstrip().rstrip() #remove trailing and leading white space
  prefilter = spell(str) #spell check 

  #remove special characters except ' ' and  '-'
  remove = """!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"""
  remove = remove.replace("-", "") # don't remove hyphens
  pattern = r"[{}]".format(remove) # create the pattern
  filtered = re.sub(pattern, "", prefilter)

  print(filtered)
  return filtered


print("--------------------------------------------------")

for element in results:

  if element[2] > 0:
    ingredient = element[1].lower()

    if "ingre" in ingredient:
      Ingredients = True
    if Ingredients:

      if "," in ingredient:
        split = ingredient.split(",")
        for word in split:
          if word != "":
            filteredPrint(word)
      elif "and" in ingredient:
        split = ingredient.split("and")
        for word in split:
          if word != "":
            filteredPrint(word)
      else:
        filteredPrint(ingredient)
        #print(element[2])

