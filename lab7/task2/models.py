class Animal:
    def __init__(self, name, age, color):
        self.name = name
        self.age = age
        self.color = color

    def speak(self):
        return "..."

    def describe(self):
        return f"{self.name} is {self.age} years old and has {self.color} color"

    def __str__(self):
        return f"Animal(name={self.name}, age={self.age}, color={self.color})"


class Dog(Animal):
    def __init__(self, name, age, color, breed):
        super().__init__(name, age, color)
        self.breed = breed

    def speak(self):
        return "Woof!"

    def fetch(self):
        return f"{self.name} is fetching the ball!"

    def __str__(self):
        return f"Dog(name={self.name}, age={self.age}, breed={self.breed})"


class Cat(Animal):
    def __init__(self, name, age, color, indoor):
        super().__init__(name, age, color)
        self.indoor = indoor

    def speak(self):
        return "Meow!"

    def purr(self):
        return f"{self.name} is purring..."

    def __str__(self):
        return f"Cat(name={self.name}, age={self.age}, indoor={self.indoor})"
