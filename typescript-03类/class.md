### 类
```typescript
    class Person {
        name: string;
        constructor (age: number) {
            this.age = age
        }
        say () {
            console.log("My name is " + this.name, "I am " + this.age + " years old.")
        }
    }
    const person = new Person(22)
    person.name = 'haliy'
    person.say() // My name is haliy, I am 22 years old.
```

> 类以class关键字声明， 上面我们声明了一个叫Person的类，类的内部包含`name`属性， `constructor` 构造函数， `say`方法。调用类的方式，通过new 关键字实例化出一个对象，这个对象包含类中的所有公有属性以及方法。