function fn <T>(arg: T[]):T[] {
    return arg
}

fn<string>(['a'])

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