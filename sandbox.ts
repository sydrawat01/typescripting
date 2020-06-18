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