class employee():
    def __init__(self,name,salary):
        self.name=name
        self.salary=salary
    def display(self):
        print("Name:",self.name)
        print("Salary:",self.salary)    
class manager(employee):
    def __init__(self,name,salary,department):
        super().__init__(name,salary)
        self.department=department
    def display(self):
        super().display()
        print("Department:",self.department)
m1=manager("Alice",80000,"HR")
m1.display()
e1=employee("Bob",50000)
e1.display()