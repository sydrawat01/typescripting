# TypeScript 101

This is a basic playground to work on my typescript skills.

## What is TypeScript ?

- A superset of Javascript
- Allows us to use stric types
- Supports modern features (arrow functions, let, const)
- Extra feactures (tuples, inteerfaces, generic, etc)

### What should you already know?

- Javascript
  - Arrow functions
  - The DOM
  - Classes

## Install

Install typescript globally in the system using `npm i -g typescript`.

This will install the typescript compiler globally in your system.
You can then use `tsc` to compile your typescript files.

### Compiling TypeScript

The proper way to compile a typescript file is:

```shell
tsc input.ts output.js
```

The above command will convert (compile) the code in `input.ts` file, which is a typescript file, into vanillaJS in `output.js`.

In case your input and output files have the same name, and only differ in the extension, then you can use the shorthand to compile the `.ts` file like so:

```shell
tsc sandbox.ts
```

The above line will compile `sandbox.ts` into `sandbox.js`.

Eveerytime we make a change in `.ts` file, we need to manually compile it to convert it to `.js`. It would be nice if this could be done automatically, right?

This is easy to do, we just need to a the `-w` flag in the compile command, like so:

```shell
tsc sandbox.ts -w
```

The `-w` flag stands for `watch`, which will listen to the changes in your `.ts` file and run the `tsc` command based on any changes.

## Type Basics

- We cannot change the type of the variable in typescript, but we can always change the value, but the new value must be of the same type as that of which when it was defined.

_Example_:

```ts
let character = 'luigi'
let age = 25
let isBlackBelt = false

// character = 39 will give an error
character = 'mario' // this is not an error

// age = 'yoshi' will give an error
age = 20

//isBlackBelt = 'yes' will give an error
isBlackBelt = true
```

TypeScript `infers` the type of the value we assign a variable to, just like in Javascript.

### Using variables in functions

Consider the following example:

```ts
const circumference = diameter => Math.PI * diameter

console.log(circumference('hello'))
```

Calling the function `circumference()` with a `String` instead of a `Number` does not give an error, rather it will log `NaN` to the console.

To avoid this from hapenning and to define what type of variable is the function parameter expecting, we can do it in typescript in the following way:

```ts
const circumference = (diameter: number) => Math.PI * diameter

console.log(circumference('hello'))
```

If we pass a `String` in this case, ESLint will highlight that the parameter MUST be a number and not a string.

If we look at the compiled code in sandbox.js, we can see that the code is no different from the first version of the `circumference()` function. This helps in developing checks in our code to prevent errors from happening, before the code is compiled to JS for the browser to understand.

## Objects & Arrays

### Arrays

Creating an array is the same as you do in Javascript.

```ts
let names = ['mario', 'luigi', 'yoshi']
names.push('toad')
// names.push(true)
// names.push(35)
// names[0] = 200
// Pushing different types of values in an array is not allowed in typescript
```

Adding values to an array that are not the same `type`, will result in a error.

In case we have a mixed array when we declare it, only in that case can we add the values of different type, but with the same restriction again that only the types that are declared in the initial array can be mutated/added in the array.

_Example_:

```ts
let mixed = ['mario', 24, 56, 'luigi']
mixed.push(100)
mixed.push('yoda')
// mixed.push(false) will result in an error.
```

Now, this array contains `string` as well as `number` type values. So we can only add `string` and `number` values to this array. Adding a `boolean` will result in an error as usual.

We are not only fixed typing the values in an array, but also the array name as well. We cannot change the `names` arary into a `string` or `number` or `boolean`, etc. It has to remain an array.

### Objects

Same declaration as in Javascript.

```ts
let ninja = {
  name: 'mario',
  belt: 'black',
  age: 25
}

ninja.name = 'luigi'
ninja.age = 25
ninja.belt = 'yellow'
// ninja.age = '30' will result in an error
```

Object mutations are the same as in javascript, but here again, we are fixed typing the type of the object properties, so `age` has to be a `number`, `belt` and `name` must be `string` type.

Any change in the type of the object property will result in an error.

Once we have defined the object, we then cannot add additional properties to that object.

```ts
let ninja = {
  name: 'mario',
  belt: 'black',
  age: 25
}

// ninja.skills = ['karate', 'judo'] will result in an error
```

And it goes without saying, we cannot change the object `ninja` to another type, say `string` or `number` or `boolean`, etc. It has to remain type as `object`.

Changing multiple values in the object is supported, but we need to declare all the properties of the object in such a case. If we leave out even one property, it'll result in an error.

```ts
ninja = {
  name: 'yoda',
  // age: 40 will result in an error since one property is missing
  belt: 'blue'
}
```

When changing multiple values like above, we need to match the object that was declared initially, else we will encounter an error.
Even adding a new property here will result in an error.

## Explicit Types

Give variables an explicit type therefore allowing only a specific type of value to be assigned to that variable.

```ts
let firstName: string
let userAge: number
let isLoggedIn: boolean

firstName = 'luigi'
userAge = 25
isLoggedIn = false
```

### Explicit Array Type

We can declare the type of the elements an array will contain.

```ts
let users: string[]
users = ['mario', 'luigi']
let tech: string[] = [] // initialize to an empty array
tech.push('js')
tech.push('ts')
```

Initializing to an empty array allows us to use the array default methods like `push()` and `pop()`.

> NOTE: It is always useful to initialize an empty array!

### Union types

This is a way of saying a variable can be one of two or one of three types and so on.

```ts
let mixed: (string|number|boolean)[] = []
mixed.push('hello')
mixed.push(25)
mixed.push(false)
```

> NOTE: We do not need to give the parenthesis `()` to the type of the variable if it't not an array. The parenthesis are only required for explicitly defining the type of the array.

```ts
let uid: string|number
uid = '123'
uid = 123
```

### Object explicit types

```ts
let ninjaOne: object
ninjaOne = {
  name: 'yoshi'
  age: 20
}
```

> NOTE: This will work with arrays as well, since arrays are a type of object in javascript.

```ts
let ninjaTwo: object
// ninjaTwo = '' will give an error
ninjaTwo = [] // this is not an error
```

To be even more specific when declaring an object, we can do the following:

```ts
let ninjaThree: {
  name: string,
  age: number,
  loggedIn: boolean
}

ninjaThree = {
  name: 'Yoda',
  age: 30,
  loggedIn: false
}
```

So when declaring the values for the object, we need to provide all the properties for that object, otherwise we will get an error.

## Dynamic (any) types

A variable can be of any type at declaration and can change it's type at any time within the code to a different type.

```ts
let age: any = 25
console.log(age)
age = true
console.log(age)
age = 'hello'
console.log(age)
age = {
  name: 'Luigi'
}
console.log(age)
```

This can be extended to arrays and objects as well. Here's how we can do it:

**Arrays:**

```ts
let mixed: any[] = []
mixed.push(25)
mixed.push(true)
mixed.push('mario')
console.log(mixed)
```

**Objects:**

```ts
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
```
