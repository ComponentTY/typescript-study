#### 类的静态属性 static

> 我们可以在类本身挂载一些属性或者方法，这些属性和方法存在于类本身，而不是类的实例上，访问静态属性或者静态方法时，我们使用`类名.属性|方法`

```ts
    class Girl {
        static height:number = 150
        introduce () {
            console.log(`My name is ${this.name}, I am ${Girl.height}cm`)
        }
        static setHeight () {
            return this.height = 168
        }
        constructor (public name: string) {
            this.name = name
        }
    }
    const Lily = new Girl('Lily')
    // Girl.setHeight()
    Lily.introduce()
```
