namespace Components{
    export class Animal {
        constructor () {
            const elem = document.createElement('div')
            elem.innerText = 'I am an Animal'
            document.body.appendChild(elem)
        }
    }
    export class People {
        constructor () {
            const elem = document.createElement('div')
            elem.innerText = 'I am a People'
            document.body.appendChild(elem)
        }
    }
    export class Car {
        constructor () {
            const elem = document.createElement('div')
            elem.innerText = 'I am a Car'
            document.body.appendChild(elem)
        }
    }
}