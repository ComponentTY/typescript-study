#### 泛型
简单理解为泛指的类型。

```ts
    function getAge<T> (age: T) :T {
        return age
    }
    getAge<number>(18)
```

> 当我们定义了 函数参数的类型是`T`时，我们就要把这个参数当成是任意或者所有类型来使用。什么意思呢？

```ts
    function say<T> (mess: T): T {
        console.log(mess.length)
        return T
    }
    say<number>(12)
```
这时候程序就报错了，原因是mess是数值类型的，数值类型没有.length属性。所以就报错了。


假设我们箱操作T类型的数组而不直接是T。由于我们操作的是数组，数组是有length属性的，我们应该如何想创建其他数组一样创建这个数组呢？
```ts
    function say <T> (mess: T[]): T[] {
        console.log(mess.length)
        return mess
    }
    say<number>([1, 2, 3])

    function say <T> (mess: Array<T>): Array<T> {
        console.log(mess.length)
        return mess
    }
    say<number>([1, 2, 3])
```