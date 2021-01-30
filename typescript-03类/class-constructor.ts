class Person {
    public name: string
    constructor (name: string) {
        this.name = name
    }
    say () {
        console.log(`Hello, My name is ${this.name}.`)
    }
}

class Teacher extends Person{
    constructor (name: string) {
        super(name) // 继承的子类中使用构造函数必须要写super()
    }
    say () {
        console.log("Today is a sunny day, I'm so happy.")
        super.say()
    }
    teach () {
        console.log('My name is ' + this.name + ', I can teach math')
    }
}

const teacher = new Teacher('小明')
teacher.teach()
teacher.say()
