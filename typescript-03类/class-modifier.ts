//  修饰符 public 字面意思 公共的，也就是说在类的里面和类的外面都是可以用的
//  private 私有的， 只能在类的里面使用
//  protected 受保护的 在类的里面使用，但是可以在继承中的子类中使用
class Person {
    public name: string
    private age: number
    readonly weight: number = 160
    protected friends = {
        name: 'xiaogang'
    }
    constructor (name: string, age: number) {
        this.name = name
        this.age = age
    }
    getAge () {
        return this.age - 10
    }
}

// const person1 = new Person('xiaohong', 18, {name: 'xiaoming'})

// console.log(person1.name, person1.age, person1.friends) // 这里person1.age person1.friends 就报错了

class Teacher extends Person {
    constructor (name: string, age: number) {
        super(name, age)
    }
    showFriends () {
        console.log(super.getAge(), this.friends)
    }
}

let xiaoxiao = new Person('小红', 22)
// xiaoxiao.weight = 280  报错
console.log(xiaoxiao.weight)
let teacher = new Teacher('xiaohong', 18)
xiaoxiao = teacher
teacher.showFriends()


class Animal{
    protected friends: object = {
        name: '小刚',
        age: 18
    };
}
class Dog extends Animal{
    showFriends ():any {
        console.log(this.friends)
    }
}
const dog = new Dog()
console.log(dog.showFriends())
