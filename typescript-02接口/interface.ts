function printLable(labelValue: {label: string}) {
    console.log(labelValue.label)
}

const myObj = {
    size: 10,
    label: 'Size 10 Object'
}

printLable(myObj)


interface labelVal {
    label: string
}

function printVal(labelVal: labelVal) {
    console.log(labelVal.label)
}

const myoo = {
    size: 10,
    label: 'Size 12 Object'
}

printVal(myoo)

// 可选属性

interface SquareConfig {
    color?: string,
    width?: number
}

function createSquare(config: SquareConfig): {color: string, area: number } {
    let newSquare = {
        color: '#0f0',
        area: 140
    }
    console.log(config)
    if (config.color) {
        newSquare.color = config.color
    }

    if (config.width) {
        newSquare.area = config.width * config.width
    }

    return newSquare
}

let mySquare = createSquare({color: '#000'}) // 如果此处传值是{colo: '#000'} ts就会报错,类型“{ colo: string; }”的参数不能赋给类型“SquareConfig”的参数。对象文字只能指定已知的属性，但“colo”中不存在类型“SquareConfig”.如何解决呢？

console.log(mySquare)

// 只读属性 readonly

interface Point {
    readonly x: number,
    readonly y: number
}

let p: Point = { x: 10, y: 20 } 

// p.x = 1    Error: 无法分配到 "x" ，因为它是只读属性

// ReadonlyArray<T> 与 Array<T> 相似，只是把所有的可变方法去掉了，因此可以确保数组创建之后再也不能被改变；
let a: number[] = [1, 2, 3]
let arr:ReadonlyArray<number> = a

// arr[0] = 1 Error 类型“readonly number[]”中的索引签名仅允许读取

// a = arr Error 类型 "readonly number[]" 为 "readonly"，不能分配给可变类型 "number[]"
a = arr as Array<number>

let s: Array<number> = arr as number[]


console.log(a)