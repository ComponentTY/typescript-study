### 类的继承以及类的构造函数

- 继承， 一种用于扩展当前类的基本方法。
``` ts
    class Person {
        constructor (name: string) {
            this.name = name
        }
        say () {
            console.log(`Hello, My name is ${this.name}.`)
        }
    }

    class Teacher extends Person {
        constructor (name: string) {
            super(name)
        }
        say () {
            console.log("Today is a sunny day, I'm so happy.")
            super.say()
        }
        terach () {
            console.log(`My name is ${this.name}, I teach Math.`)
        }
    }

    const teacherLi = new Teacher('LiLei')
    teacherLi.teach() // My name is LiLei, I teach Math.
    const teacherWang: Person = new Teacher('wangSir')
    teacherWang.say() // Today is a sunny day, I'm so happy.Hello, My name is wangSir.
```

> - 上面的Teacher类继承了Person类， 类之间的继承通过extends关键字，我们称Teacher类为子类， 被继承的Person类为超类[称之为父类吧，毕竟这样好理解]。当子类中用constructor构造函数时，必须要先调用super函数，这是规定。
> - 子类重写父类中的方法， 就直接在子类中在声明一遍这个方法，然后写重写过的逻辑就好了。比如我们的Teacher类中的say方法。如果我们还想调用父类中的say方法，我们可以用super拿到父类的构造函数，然后直接调用super.say就可以执行父类中的方法。