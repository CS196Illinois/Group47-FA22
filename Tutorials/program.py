## install vscode
## checkout repo?

## install python from extensions

## python3 -m pip --default-timeout=1000 install easyocr => will take a while 2:06
## pip: package manager for python packages 
## ocr: designed to read any kind of short text (https://www.jaided.ai/easyocr/documentation/)
# easyocr documentation: (https://github.com/JaidedAI/EasyOCR)
## -m: 

import easyocr

# easyocr documentation: (https://github.com/JaidedAI/EasyOCR)
# telling readers what language we expect
# reader = easyocr.Reader(['en']) 

# ACTIVITY: try adding chinese to this array, look for supported languages
reader = easyocr.Reader(['en', 'ch_tra']) 

# upload image sent through discord
# read text from certain image
results = reader.readtext("/Users/sophiazhuang/Desktop/CS196/Group47-FA22/Tutorials/image1.jpg")
print(results)

# QUESTION: what do all these numbers mean?

# ACTIVITY: print out the array about chinese only 
print("chinese results: ", results[0])

# ACTIVITY: print out only the chinese text
print("chinese text: ", results[0][1])

# ACTIVITY: print all of the text
text = ''
for result in results:
    text += result[1] + ' '

print(text)

# ACTION TASK: analyze nutrition label
# QUESTION: what issues do we see?
nutrition_results = reader.readtext("/Users/sophiazhuang/Desktop/CS196/Group47-FA22/Tutorials/nutrition-label-easy.png")
print(nutrition_results)
