### 抽象类

- 概念
    抽象类作为其他派生类的基类使用，他们一般不会被实例化，不同与接口，抽象类中可以定义成员的实现细节。使用abstract关键字定义抽象类以及在抽象类中的方法。

```ts
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
    let dog : Animal

    dog = new Animal() // 报错
    dog = new Dog()
    dog.move()
    dog.bark()
```

> 在抽象类定义的抽象方法， 必须在派生类中实现。抽象类不同于接口，抽象类中必须使用abstract关键字定义，而且抽象类中可以使用修饰符`public private protected`。