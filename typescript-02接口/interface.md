## typescript  interface接口

- ##### 接口定义一套要求，起一个名字，如果后续有用到这个名字，就需要遵循他的要求，否则就会出错；

```tsx
interface SquareConfig{
    color: string,
    width: number
}

function createSquare(config: SquareConfig):{color: string, area: number} {
    let newSquare = {
        color: '#f00',
        area: 40
    }
    newSquare.color = config.color
    newSquare.area = config.width * config.width
    return newSquare
}
createSquare({color: '#000', width: 10})
```

指定函数返回值的函数必须有一个返回值，否则会报错。上面的函数我们指定函数的返回值是一个对象`{color: string, area: number}`,我们定义了一个名为SquareConfig的接口，createSquare函数的参数指定为SquareConfig, 也就是config参数遵循SquareConfig的要求，config需要有color属性且属性值的类型必须为string，需要有width属性，且属性值的类型必须为number类型。

- ##### 可选参数

啥是可选参数， 简单理解就是在属性后面加个?，表示可有可无，不必须的

```tsx
interface SquareConfig{
    color?: string,
    width?: number
}
function createSquare(config: SquareConfig): {color: string, area: number} {
    let newSquare = {
        color: '#f00',
        area: 40
    }
    if (config.color) newSquare.color = config.color
    if (config.width) newSquare.area = config.width * config.width
    return newSquare
}
createSquare({color: '#000'}) // {color: '#000', area: 40}
```

上面这个例子，我们没有传width属性进去，但是代码依然安全执行了。因为color 、width都是可选属性，可传可不传。

> 使用可选属性的好处是，**可以对可能存在的属性进行预定义，好处之二是可以捕获引用了不存在的属性时的错误**，比如我们故意将createSquare中的color属性名拼写错误，就会得到一个错误提示。

```tsx
interface SquareConfig{
    color?: string,
    width?: number
}
function createSquare(config: SquareConfig): {color: string, area: number} {
    let newSquare = {
        color: '#f00',
        area: 40
    }
    // Error 属性“colr”在类型“SquareConfig”上不存在。你是否指的是“color”
    if (config.colr) newSquare.color = config.color
    if (config.width) newSquare.area = config.width * config.width
    return newSquare
}
createSquare({color: '#000'}) // {color: '#000', area: 40}
```

- ##### 只读属性

一些对象属性只能在对象刚创建的时候修改其值，你可以在属性名前用readonly来指定只读属性；

```tsx
interface Point{
    readonly x: number,
    readonly y: number
}
```

然后你可以通过赋值一个对象字面量来构造一个Point。 赋值后x 和 y 就再也不能被改变了。

```tsx
let p1: Point = {
    x: 10,
    y: 20
}
p1.x = 1 // Error 无法分配到 "x" ，因为它是只读属性
```

typescript中有 ReadonlyArray<T> 只读数组与Array<T>相似， 只是将数组的所有方法都去掉了， 以致于创建的数组无法被修改，同时也无法被赋值给普通的数组

```tsx
let a:number[] = [1,2,3]
let arr:ReadonlyArray<number> = a
arr[0] = 2 // Error readonly number[] 中的索引签名仅允许读取
a = arr // Error readonly number[] 为readonly， 不能分配给可变类型"number[]"
```

如果你想赋值给其他普通的数组，需要加类型断言，重写readonlyArray属性

```tsx
let a:number[] = [1,2,3]
let arr:ReadonlyArray<number> = a
a = arr as Array<number> 
a = arr as number[]
```

readonly 与 const 使用场景，看把他作为变量还是一个属性， 属性就用readonly， 变量就用const。

- ##### 额外的属性检查

比如我们拿可选参数的例子， 我们传入的参数是{ colour: '#0f0', width: 40 }, 此时会安全执行吗？答案是不会，typescript会报出一个bug，原因是对象字面量会被特殊对待，会做额外的属性检查，当将他们赋值给变量或者参数传递的时候，如果一个对象字面量存在任何”目标类型“不包含的属性是，你会得到一个错误。

```tsx
let mySquare = createSquare({colour: '#0f0', width: 40})
// Error 'colour' not expected in type 'SquareConfig'
```

想要绕开这些类型检查，最简单的方法就是使用类型断言；

```tsx
let mySquare = createSquare({colour: '#0f0', width: 40} as SquareConfig)
```

官方推荐的最佳的方式是添加一个字符串索引签名，前提是能够确定这个对象可能具有某些做为特殊用途使用的额外属性。

```tsx
interface SquareConfig {
    color?: string,
    width?: number,
    [propName: string]: any
}
```

- ##### 函数类型

接口可以描述js中对象拥有的各种各样的外形。除了描述代码属性的普通对象外，接口也可以描述函数类型。

为了使用接口表示函数类型，我们需要给接口定义一个调用签名，他就像是一个只有参数列表和返回值的函数定义，参数列表中的每个参数都需要有名字和类型。

```tsx
interface myFunc{
    (sourceString: string, subString: string): boolean
}
```

上面这段代码描述了，定义了一个叫myFunc的函数接口，他需要两个参数，类型分别是string、string，返回值是boolean类型。

接下来我们使用一下这个接口

```tsx
let funcDemo:myFunc
funcDemo = function (src: string, srcString:string) {
    let result = src.search(srcString)
    return result > -1
}
```

有人会问，你写的function中的参数名称与定义的接口中的参数名称不一样啊，能执行吗？答案是肯定的，可以执行， ts 中，函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的。什么意思呢？

```tsx
let funcDemo:myFunc
funcDemo = function (src: string, srcString:number) { // Error srcString的类型与subString的类型不匹配
    let result = src.search(srcString)
    return result > -1
}
```

也就是说ts会将对应位置的参数的类型进行匹配，如果对应参数的类型不匹配就会报错。同时函数的返回值类型也需要跟接口中描述的返回值类型相同才可以。不然就会给我们警告提示。



