"use strict";
const character = 'mario';
console.log(character);
const newChar = 'luigi';
console.log(newChar);
const inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(input => console.log(input));
const circumference = (diameter) => Math.PI * diameter;
console.log(circumference(5));
// Arrays
let names = ['mario', 'luigi', 'yoshi'];
names.push('toad');
// names.push(true)
// names.push(35)
// Pushing different types of values in an array is not allowed in typescript
// Objects
let ninja = {
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
let firstName;
let userAge;
let isLoggedIn;
// Arrays
let users;
users = ['luigi', 'mario'];
let tech = [];
tech.push('js');
tech.push('ts');
// Union Types
let mixed = [];
mixed.push('hello');
mixed.push(25);
mixed.push(false);
let uid;
uid = '123';
uid = 123;
// Objects
let ninjaOne;
ninjaOne = {
    name: 'yoshi',
    age: 20
};
let ninjaThree;
let ninjaTwo;
// ninjaTwo = '' will give an error
ninjaTwo = []; // this is not an error
ninjaThree = {
    name: 'Yoda',
    age: 30,
    loggedIn: false
};
// Dynamic (any) types
let weight = 75;
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
let mixedArr = [];
mixedArr.push(25);
mixedArr.push(true);
mixedArr.push('mario');
console.log(mixedArr);
// dynamic object types
let player;
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
let greet = () => {
    console.log('Hello World!');
};
// greet = 'Hello World!'; will result in an error
// explicit type function declaration
let sayHello;
sayHello = () => {
    console.log('Hello Again!');
};
const add = (a, b, c = 10) => {
    // const add = (a: number, b: number, c?: number|string): void => {
    console.log(a + b);
    console.log(c); // undefined
};
add(5, 10);
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greetA = (user) => {
    console.log(`${user.name} says hello!`);
};
const greetB = (user) => {
    console.log(`${user.name} says hello too!`);
};
// Function Signatures
//example 1
let greet1;
greet1 = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
//example 2
let calc;
calc = (num1, num2, action) => {
    if (action === 'add') {
        return num1 + num2;
    }
    else {
        return -1;
    }
};
//example 3
let logDet;
logDet = (player) => {
    console.log(`${player.name} is ${player.age} years old`);
};
// Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let doc1 = addUID({ name: 'yoshi', age: 30 });
console.log(doc1.name, doc1.age, doc1.uid);
