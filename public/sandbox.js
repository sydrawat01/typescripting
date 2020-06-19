"use strict";
var character = 'mario';
console.log(character);
var newChar = 'luigi';
console.log(newChar);
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (input) { return console.log(input); });
var circumference = function (diameter) { return Math.PI * diameter; };
console.log(circumference(5));
// Arrays
var names = ['mario', 'luigi', 'yoshi'];
names.push('toad');
// names.push(true)
// names.push(35)
// Pushing different types of values in an array is not allowed in typescript
// Objects
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 25
};
ninja.name = 'luigi';
ninja.age = 25;
ninja.belt = 'yellow';
// ninja.age = '30' will result in an error
// ninja.skills = ['karate', 'judo']
// Explicit Types
var firstName;
var userAge;
var isLoggedIn;
// Arrays
var users;
users = ['luigi', 'mario'];
var tech = [];
tech.push('js');
tech.push('ts');
// Union Types
var mixed = [];
mixed.push('hello');
mixed.push(25);
mixed.push(false);
var uid;
uid = '123';
uid = 123;
// Objects
var ninjaOne;
ninjaOne = {
    name: 'yoshi',
    age: 20
};
var ninjaThree;
var ninjaTwo;
// ninjaTwo = '' will give an error
ninjaTwo = []; // this is not an error
ninjaThree = {
    name: 'Yoda',
    age: 30,
    loggedIn: false
};
// Dynamic (any) types
var weight = 75;
console.log(weight);
weight = true;
console.log(weight);
weight = 'Luigi';
console.log(weight);
weight = {
    name: 'yoda'
};
console.log(weight);
// dynamic array types
var mixedArr = [];
mixedArr.push(25);
mixedArr.push(true);
mixedArr.push('mario');
console.log(mixedArr);
// dynamic object types
var player;
player = {
    name: 'yoshi',
    age: 25
};
console.log(player);
player = {
    name: 25,
    age: 'yoshi'
};
console.log(player);
// Functions Basics
var greet = function () {
    console.log('Hello World!');
};
// greet = 'Hello World!'; will result in an error
// explicit type function declaration
var sayHello;
sayHello = function () {
    console.log('Hello Again!');
};
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    // const add = (a: number, b: number, c?: number|string): void => {
    console.log(a + b);
    console.log(c); // undefined
};
add(5, 10);
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
var logDetails = function (uid, item) {
    console.log(item + " has a uid of " + uid);
};
var greetA = function (user) {
    console.log(user.name + " says hello!");
};
var greetB = function (user) {
    console.log(user.name + " says hello too!");
};
// Function Signatures
//example 1
var greet1;
greet1 = function (name, greeting) {
    console.log(name + " says " + greeting);
};
//example 2
var calc;
calc = function (num1, num2, action) {
    if (action === 'add') {
        return num1 + num2;
    }
    else {
        return -1;
    }
};
//example 3
var logDet;
logDet = function (player) {
    console.log(player.name + " is " + player.age + " years old");
};
