## typescript interface接口

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
a = Array<number>arr
```

readonly 与 const 使用场景，看把他作为变量还是一个属性， 属性就用readonly， 变量就用const。

- ##### 额外的属性检查





