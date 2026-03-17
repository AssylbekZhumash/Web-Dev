from models import Animal, Dog, Cat

dog1 = Dog("Rex", 3, "brown", "Labrador")
dog2 = Dog("Buddy", 5, "black", "Poodle")
cat1 = Cat("Whiskers", 2, "white", True)
cat2 = Cat("Shadow", 4, "black", False)

animals = [dog1, dog2, cat1, cat2]

print("All Animals ")
for animal in animals:
    print(animal)

print("\nSounds (Polymorphism) ")
for animal in animals:
    print(f"{animal.name} says: {animal.speak()}")

print("\n Descriptions ")
for animal in animals:
    print(animal.describe())

print("\nUnique Methods ")
print(dog1.fetch())
print(cat1.purr())
