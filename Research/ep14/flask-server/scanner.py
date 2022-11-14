class Scanner:
    def scan(self): 
        ingredients = ""
        for i in range(10):
            ingredients += "ingredient" + str(i)
        return ingredients
