## typescript 基础类型

1. string 类型

   ```tsx
   let str: string = '123'
   console.log(str) // 123
   
   
   // 如果定义了类型为string 但设置的值为其他类型就会报错
   
   let str: string = 123
   console.log(str) // 不能将类型number 分配给类型string
   ```

2. number 类型

   ```ts
   let num: number = 123
   console.log(num)
   let num: number = 0x123
   console.log(num)
   let num: number = '123'
   console.log(num) // 不能将类型string 分配给类型number
   ```

3. boolean 类型

   ```ts
   let isTrue: boolean = true;
   console.log(isTrue) // true
   
   let isFalse: boolean = 123;
   console.log(isFalse) // 不能将类型number 分配给 类型 boolean
   ```

   

4. 数组类型

   ```tsx
   // 例1
   let arr: number[] = [123]
   console.log(arr) // [123]
   // 例2
   let arr:Array<number> = [1]
   console.log(arr) // [1]
   ```

5. 元组 tuple

   ```tsx
   // 例1
   let arr: [number, string] = [1, 'abc']
   console.log(arr) // [1, 'abc']
   // 例2
   let arr: [number, string]
   arr = [1, 2] // Error
   
   // 例3
   let arr: any[] = [1, '23', true]
   ```

   当访问一个已知的索引的时候，会得到正确的类型；

   ```tsx
   let arr: [number, string]
   arr = [1, 'abc']
   arr[0] // 1
   ```

   当访问一个超出界限的元素，会使用联合类型替代

   ```tsx
   let arr: [number, string]
   arr = [1, 'abc']
   arr[2] = 3 // OK ，超出界限的元素可以赋值给(number|string)类型
   arr[6] = true // Error，布尔类型不是（number|string）类型
   ```

6. 枚举 enum, 使用枚举类型可以为一组数值赋予友好的名字

   ```tsx
   enum Color {Red, Green, Blue}
   
   let c:Color = Color.Green
   
   c // 1
   
   enum People { firstName, secondName }
   let p: People = People.firstName
   p // 0
   ```

   默认情况下从0开始为元素编号，我们可以手动指定成员的数值，我们可以将上面的例子改为从1开始编号；

   ```tsx
   enum Color {Red = 1, Green, Blue}
   let c: Color = Color.Green
   c // 2
   
   // 例2：
   enum People{
       firstName,
       secondName = 5,
       thirdName
   }
   
   let p1:People = People.firstName
   let p3:People = People.thirdName
   
   console.log(p1, p3) // 0 6
   ```

   根据上面的例2，我们手动改变了secondName的编号，得到p1是0， p3 是 6， 我们得知，手动指定的成员数值，只会对这个成员之后的成员编号有影响，对之前的成员编号没有影响。

   或者可以全部采用手动赋值

   ```tsx
   enum Color { Red = 1, Green = 4, Blue = 6 }
   let c: Color = Color.Green
   c // 4
   ```

   枚举类型提供的一个便利是你可以由枚举的值得到他的名字，例如，我们知道数值2，但是我们不确定他映射到Color的那个名字，我们可以直接查找相应的名字；

   ```tsx
   enum Color { Red = 1, Green = 2, Blue = 5 }
   let enumName: string = Color[5]
   enumName // "Blue" 因为在Color中Blue对应的值为5
   ```

7. Any类型

   为那些编译阶段还不清楚类型的变量指定一个类型，我们不希望类型检查器对这些值进行检查而是直接让他们通过编译阶段的检查。那么我们可以使用`any`类型来标记这些变量。

   ```tsx
   let noType: any = 4;
   noType = "hello world" // OK, definitely a string
   noType = true // OK, definitely a boolean
   ```

   Object类型也允许为其赋予任何类型的值，但是却不能够在它上面调用任意的方法，即便是他真的有这个方法，什么意思呢？

   ```tsx
   let noType: any = 4
   noType.toFixed(2) // 4.00
   
   let other: Object = 4
   other.toFixed(2) // Error: prototype 'toFixed' doesn't exist on type 'Object'
   ```

8. void类型

   从某种程度上看， void类型与any类型正好相反，void类型表示没有任何类型。当一个函数没有返回值时，你通常会见到其返回值的类型为void：

   ```tsx
   function fn(): void {
       console.log('hello world')
   }
   ```

   声明一个void类型的变量没什么大用，因为你只能为他赋值undefined和null

   ```tsx
   let variable: void = null | undefined
   ```

9. null 和 undefined类型

   ts中，null和undefined 拥有各自的类型 null undefined。 和void类型相似，他们的本身的类型并没有太大用处。

   ```tsx
   let u: undefined = undefined
   let n: null = null
   ```

   默认情况下，null和undefined类型是所有类型的子类型， 意思就是说，你可以把undefined和null赋值给number类型的变量。

   然而，当你指定了`--strictNullChecks`标记，null和undefined只能赋值给void和他们本身。这能避免很多常见的问题。

   > 注： 我们鼓励尽可能的使用`--strictNullChecks`

10. Never类型

    never 类型表示的是那些永不存在的值的类型， 例如，`never`类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；变量也可能是`never`类型，当他们被永不为真的类型保护所约束时。

    never类型是任何类型的子类型，也可以赋值给任何类型，然而，没有类型是never的子类型，或者没有类型可以赋值给never类型（除了never本身之外）。 即使any也不可以赋值给never.

    > 注： 除了never本身可以赋值给never类型外，任何类型都不能赋值给never类型。

    ```tsx
    function error(message: string): never { // 返回never的函数必须存在无法达到的终点
        throw new Error(message)
    }
    ```

11. Object 类型  // 大Object 官方文档中没有明确介绍这种类型,Object类型可以为他赋值任何类型，但是却不能够在它上面调用任意的方法，即便是他真的有这个方法，什么意思呢？

    ```tsx
let a:Object = 4
    a.toFixed(2) // Error

    a.toString() // '4' OK
    ```
    
12. object 类型 // 小 object

    object 表示非原始类型，也就是除了number、 string、boolean、 null、undefined、symbol之外的类型，

    使用object类型，就可以更好的表示像Object.create这样的api。例如

    ```tsx
    declare function create(o:object | null): void;
    create({props: 0}) // ok
    create(null) // OK
    create(45) // Error
    create('string') // Error
    create(null) // Error
    create(undefined) // Error
    ```

13. 类型断言

    有时候你会比ts更了解某个值的详细信息，你会清楚的知道这个实例具有比他现有类型更确切的类型，通过`类型断言`可以告诉编译器，相信我我知道我在干什么，类型断言就好比其他语言中的类型转换，但是不进行特殊的数据检查和解构。他没有运行时的影响，只是在编译阶段起作用，ts会假设你，程序员，已经进行了必须的检查。

    类型断言有两种形式

    ```tsx
    let someValue: any = 'this is a string'
    let strLength: number = (<string>someValue).length
    ```

    另一种as语法

    ```tsx
    let someValue: any = 'this is a string'
    let strLength: number = (someValue as string).length
    ```

    两种写法等价，凭个人喜好使用， 但是在ts中使用jsx是，只有as语法断言是被允许的。

