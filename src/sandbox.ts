const character = 'mario'
console.log(character)

const newChar = 'luigi'
console.log(newChar)

const inputs = document.querySelectorAll('input')
console.log(inputs)

inputs.forEach(input => console.log(input))

const circumference = (diameter: number) => Math.PI * diameter
console.log(circumference(5))

// Arrays
let names = ['mario', 'luigi', 'yoshi']
names.push('toad')
// names.push(true)
// names.push(35)
// Pushing different types of values in an array is not allowed in typescript

// Objects

let ninja = {
  name: 'mario',
  belt: 'black',
  age: 25
}

ninja.name = 'luigi'
ninja.age = 25
ninja.belt = 'yellow'
// ninja.age = '30' will result in an error
// ninja.skills = ['karate', 'judo']

// Explicit Types
let firstName: string
let userAge: number
let isLoggedIn: boolean

// Arrays
let users: string[]
users = ['luigi', 'mario']
let tech: string[] = []
tech.push('js')
tech.push('ts')

// Union Types
let mixed: (string|number|boolean)[] = []
mixed.push('hello')
mixed.push(25)
mixed.push(false)

let uid: string|number
uid = '123'
uid = 123

// Objects
let ninjaOne: object
ninjaOne = {
  name: 'yoshi',
  age: 20
}

let ninjaThree: {
  name: string,
  age: number,
  loggedIn: boolean
}

let ninjaTwo: object
// ninjaTwo = '' will give an error
ninjaTwo = [] // this is not an error

ninjaThree = {
  name: 'Yoda',
  age: 30,
  loggedIn: false
}

// Dynamic (any) types

let weight: any = 75
console.log(weight)
weight = true
console.log(weight)
weight = 'Luigi'
console.log(weight)
weight = {
  name: 'yoda'
}
console.log(weight)

// dynamic array types
let mixedArr: any[] = []
mixedArr.push(25)
mixedArr.push(true)
mixedArr.push('mario')
console.log(mixedArr)

// dynamic object types

let player: {
  name: any,
  age: any
}
player = {
  name: 'yoshi',
  age: 25
}
console.log(player)

player = {
  name: 25,
  age: 'yoshi'
}
console.log(player)

// Functions Basics

let greet = () => {
  console.log('Hello World!')
}

// greet = 'Hello World!'; will result in an error

// explicit type function declaration

let sayHello: Function

sayHello = () => {
  console.log('Hello Again!')
}

const add = (a: number, b: number, c: number|string = 10): void => {
// const add = (a: number, b: number, c?: number|string): void => {
  console.log(a+b)
  console.log(c) // undefined
}

add(5,10)

const minus = (a: number, b: number): number => {
  return a+b
}

let result = minus(10,7)
//result = 'hello'; will be an error, since result has type of number!

// Type Aliases

type StringOrNum = string | number
type userInfoType = { name: string, uid: StringOrNum }
const logDetails = (uid: StringOrNum, item: string): void => {
  console.log(`${item} has a uid of ${uid}`)
}

const greetA = (user: userInfoType): void => {
  console.log(`${user.name} says hello!`)
}

const greetB = (user: userInfoType): void => {
  console.log(`${user.name} says hello too!`)
}

// Function Signatures

//example 1
let greet1: (a: string, b: string) => void

greet1 = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`)
}
//example 2
let calc: (a: number, b: number, c:string) => number

calc = (num1: number, num2: number, action: string) => {
  if(action === 'add') {
    return num1+num2
  } else {
    return -1;
  }
}
//example 3
let logDet: (obj: {name: string, age: number}) => void

type person = {name: string, age: number}

logDet = (player: person) =>{
  console.log(`${player.name} is ${player.age} years old`)
}