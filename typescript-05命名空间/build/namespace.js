"use strict";
var Components;
(function (Components) {
    var Animal = /** @class */ (function () {
        function Animal() {
            var elem = document.createElement('div');
            elem.innerText = 'I am an Animal';
            document.body.appendChild(elem);
        }
        return Animal;
    }());
    Components.Animal = Animal;
    var People = /** @class */ (function () {
        function People() {
            var elem = document.createElement('div');
            elem.innerText = 'I am a People';
            document.body.appendChild(elem);
        }
        return People;
    }());
    Components.People = People;
    var Car = /** @class */ (function () {
        function Car() {
            var elem = document.createElement('div');
            elem.innerText = 'I am a Car';
            document.body.appendChild(elem);
        }
        return Car;
    }());
    Components.Car = Car;
})(Components || (Components = {}));
