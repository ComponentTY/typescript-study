### 类的修饰符 public private protected

- public 公共的， 可以再类的内部和外部使用

```ts
    class Animal {
        public name: string;
        constructor (name: string) {
            this.name = name
        }
        bark () {
            console.log(this.name) // 类的内部
        }
    }
    const dog = new Animal('nanshouAmafei')
    console.log(dog.name) // 类的外部  nanshouAmafei
    dog.bark() // nanshouAmafei
```

- private  私有的，只可以在类的内部使用

```ts
    class Girl {
        public name: string;
        private age: number;
        constructor (name: string, age: number) {
            this.name = name
            this.age = age
        }
        showSelf () {
            // 这里可以对age做处理
            /**
             * this.age = this.age - 10
            */
            console.log(`我叫${this.name},我的年龄是${this.age}`)
        }
        get Age (): number {
            return this.age
        }
    }
    const beautifulGirl = new Girl('wty', 18)
    console.log(beautifulGirl.age) // 这里会报错， 因为age是私有属性只能在Girl类的内部使用
    beautifulGirl.showSelf() // 我叫wty，我的年龄是18
    beautifulGirl.Age()
```

> 比如我就特别想获取到类的私有属性，那我们该怎么做呢，我们可以用存取器[get|set]。 比如上面的Girl类。我们给他添加一个get方法，用来获取age属性。然后我们就可以在外部通过调用Age函数获取到私有属性age了。

- protected 受保护的属性，只能在类的内部使用或者在继承的子类中使用

```ts
    class Animal{
        protected friends: object = {
            name: '小刚',
            age: 18
        };
        introduce () {
            console.log(this.friends)
        }
    }
    class Dog extends Animal{
        showFriends () {
            console.log(this.friends)
        }
    }
    const dog = new Dog()
    console.log(dog.showFriends, dog.friends)
```

#### 只读属性 readonly

> 设置readonly为前缀的属性，只支持读取，不支持设置。

```ts
    class Person {
        readonly name : string = '神魔恋'
    }
    const DSM = new Person()
    DSM.name = '大司马' // 报错， 不支持设置
    console.log(DSM.name) // 神魔恋
```