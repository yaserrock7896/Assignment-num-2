class shape():
    def area(self):
        return 0
class rectangle(shape):
    def area(self,length,breadth):
        return length*breadth
r1=rectangle()
print("Area of Rectangle:",r1.area(10,20))