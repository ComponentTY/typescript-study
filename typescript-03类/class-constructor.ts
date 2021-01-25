// 类的构造函数以及访问类型
// public private protected

class Person{
    constructor (public name: string) {
        this.name = name
        console.log(this.name)
    }
}

class Teacher extends Person{
    constructor (public name: string, private _age: number) {
        super(name)
        console.log(this.name, this._age)
    }
    get age () {
        return this._age
    }
}

const person = new Person('fwt')

const teacher = new Teacher('wty', 18)
console.log(teacher.age)