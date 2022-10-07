import easyocr
import cv2
import pytesseract

# use easyocr to read the image
reader = easyocr.Reader(['en'])
result = reader.readtext('EthanTest.png')
print(result)
