abstract class Animal {
    abstract move(): void;
    bark (): void {
        console.log('bark bark')
    }
}
class Dog extends Animal {
    move (): void {
        console.log("the dog is running 34 km")
    }
}

let dog: Animal

// dog = new Animal()
dog = new Dog()

dog.move()
dog.bark()

