class Animal {
    name: string
    age: number
    constructor (name:string, age: number) {
        this.name = name
        this.age = age
    }
    sayHello (language: string) :string {
        return language
    }
}

const Cat = new Animal('cat', 2)
console.log(Cat.sayHello('miaomiaomiao'))


class Dog extends Animal {
    run () :string {
        return 'I can run!'
    }
}

const dog = new Dog('dog', 1)

console.log(dog.sayHello('wangwangwang') + ' : ' + dog.run())


interface behavior {
    hit (): string
}

class Bird extends Animal implements behavior {
    hit () {
        return 'I can hit'
    }
}

const bird = new Bird('bird', 3)

console.log(bird.sayHello('I am bird') + bird.hit())