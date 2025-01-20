// Abstract class
abstract class Animal {
    constructor(public name: string) {}
  
    // Abstract method (must be implemented by subclasses)
    abstract makeSound(): void;
  
    // Regular method (shared among all subclasses)
    move(): void {
      console.log(`${this.name} is moving...`);
    }
  }
  
  // Subclass that extends the abstract class
  class Dog extends Animal {
    makeSound(): void {
      console.log(`${this.name} says: Woof! Woof!`);
    }
  }
  
  // Subclass that extends the abstract class
  class Cat extends Animal {
    makeSound(): void {
      console.log(`${this.name} says: Meow! Meow!`);
    }
  }
  
  // Creating instances
  const myDog = new Dog("Buddy");
  myDog.makeSound(); // Output: Buddy says: Woof! Woof!
  myDog.move(); // Output: Buddy is moving...
  
  const myCat = new Cat("Whiskers");
  myCat.makeSound(); // Output: Whiskers says: Meow! Meow!
  myCat.move(); // Output: Whiskers is moving...
  