import easyocr
import cv2

# Read text from an image 
reader = easyocr.Reader(['en'])
results = reader.readtext('~/CS124 Project/Group47-FA22/Research/ep14/EthanTest.png')
print(results)
print(results[0])
print(results[0][1])
print("----------------")
for element in results:
  print(element[1])