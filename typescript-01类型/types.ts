// function getName(person:string) {
//     return person
// }

// let user = 'hello world'



// document.body.innerHTML = getName(user)


interface Person{ // 接口
    firstName: string,
    secondName: string
}

function createPerson(person:Person) {
    console.log(`this person's firstName is ${person.firstName}, secondName is ${person.secondName}`)
}

let p = {
    firstName: '123',
    secondName: '123123'
}

createPerson(p)

let string1: string = 'i am a string' // 字符串

let number1: number = 1 // 数值

let arr:Array<string> = ['123'] // 数组

let arr1:[string, number] = ['123', 1] // 元组 tuple

console.log(arr, arr1)


enum Color {Red, Green, Blue} // enum

let c = Color.Blue

console.log(c)

let colorName: string = Color[1]

console.log(colorName) 


let isDone: boolean = true // boolean

function other(): void {  //void类型
    console.log('hello world')
}

function error(message: string): never {// never
    throw new Error(message)
}

let str: any = 'hello world, I\'m a string'

let strLength: number = (<string>str).length // 类型断言

let sLength: number =(str as string).length // 类型断言

enum People{
    firstName,
    secondName = 5,
    thirdName
}

let p1:People = People.firstName

let p2:People = People.thirdName

console.log(p1, p2)


let o: Object = 4

o.toString()

console.log(o)

let obj:object = {}
