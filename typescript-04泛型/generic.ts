//  基础泛型
function fn <T>(arg: T):T {
    return arg
}

fn<string>('a')

// 数组泛型
function sayH <T> (mess: T[]): T[] {
    console.log(mess.length)
    return mess
}
sayH<number>([1, 2, 3])

function say <T> (mess: Array<T>): Array<T> {
    console.log(mess.length)
    return mess
}
say<number>([1, 2, 3])


// 多个泛型

function Fwt <T, P> (name: T, age: P) {
    return `${name}${age}`
}

console.log(Fwt<string, number>('fwt', 25))

// 在类中使用泛型

class Animal <T> {
    constructor (private name : T[]) {
        this.name = name
    }
    getName (index: number):T {
        return this.name[index]
    }
}

const animal = new Animal<string>(['dog', 'cat', 'duck'])

console.log(animal.getName(1))

// 接口与泛型连用  泛型约束

interface Grid {
    name: string
}

class Girl <T extends Grid> {
    constructor (public name: T[]) {
        this.name = name
    }
    getName (index: number) :string {
        return this.name[0].name
    }
}

const girl = new Girl<{name: string}>([{
    name: '小红'
}, {
    name: '小丽'
}])

console.log(girl.getName(0))


// demo2 使用接口我们可以清楚的知道泛型使用的类型以及参数的类型。

// interface Car {
//     <T>(arg: T): T
// }

interface Car <T> {
    (arg: T) : T
}

function Car<T>(arg: T): T {
    return arg
}

// let Car1: Car = Car
let Car1: Car<number> = Car
console.log(Car1(1))