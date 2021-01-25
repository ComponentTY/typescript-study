/**
 * @date 2021年1月25日 18:44:33
 * @author fwt
 * ts typing 
 */

const num : number = 1

const person : {
    name: string,
    age: number
} = {
    name: 'xiaogong',
    age: 22
}

const persons : string [] = ['sds', 'sss']

class Person {}

const p: Person = new Person()

const fn : () => string = () => '123'

const a:number = 123
const obj = {
    as: '123',
    aa: 11
}

// 接口
// interface demoType {
//     name: string,
//     age: number
// }

// 类型别名
// type demoType = {
//     name: string,
//     age: number
// }

// 类
class demoType {
    name: string;
    age: number
}

const d: demoType = {
    name: 'qwe',
    age: 12
}

const dd: demoType[] = [
    {
        name: 'aaa',
        age: 22
    }
]

// 数组
const arrdemo: (string | number)[] = ['xiaohong', 22, 'teacher', 12]

console.log(arrdemo)

// 元组

const arrdemo1: [string, number] = ['sss', 22]
const arrdemo2: [string, number][] = [['sss', 22]]