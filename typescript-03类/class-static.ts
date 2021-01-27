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