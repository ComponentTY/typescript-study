// function getName(person:string) {
//     return person
// }
function createPerson(person) {
    console.log("this person's firstName is " + person.firstName + ", secondName is " + person.secondName);
}
var p = {
    firstName: '123',
    secondName: '123123'
};
createPerson(p);
var string1 = 'i am a string'; // 字符串
var number1 = 1; // 数值
var arr = ['123']; // 数组
var arr1 = ['123', 1]; // 元组 tuple
console.log(arr, arr1);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {})); // enum
var c = Color.Blue;
console.log(c);
var colorName = Color[1];
console.log(colorName);
var isDone = true; // boolean
function other() {
    console.log('hello world');
}
function error(message) {
    throw new Error(message);
}
var str = 'hello world, I\'m a string';
var strLength = str.length; // 类型断言
var sLength = str.length; // 类型断言
var People;
(function (People) {
    People[People["firstName"] = 0] = "firstName";
    People[People["secondName"] = 5] = "secondName";
    People[People["thirdName"] = 6] = "thirdName";
})(People || (People = {}));
var p1 = People.firstName;
var p2 = People.thirdName;
console.log(p1, p2);
var o = 4;
console.log(o);
