class animal():
    def sound(self):
        print("Animal makes sound")
class dog(animal):
        def sound(self):
            print("Dog barks")
class cat(animal):
            def sound(self):
                print("Cat meows")
d1=dog()
d1.sound()
c1=cat()
c1.sound()
a1=animal()
a1.sound()

