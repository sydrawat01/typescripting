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

## Better workflow and tsconfig

Things that we want to delpoy to the web are stored in the `public/` folder. The source code resides in the `src/` folder.

This is the basic folder structure of any project. So here, we move our `index.html`, `styles.css` and `sandbox.js` (compiled file from typescript) into the `public/` folder, and the source code `sandbox.ts` into the `src/` folder.

The problem that we will face here is when we compile our typescript file,  the output file is stored in `src/` instead of `public/`.

```shell
tsc src/sandbox.ts
```

The above command will result in creation of a `sandbox.js` file inside the `src/` folder, which we do not want. This should be sent to the `public/` folder.

To overcome this issue, we use the `tsconfig.json` file.

```shell
tsc --init
```

The above command will create a `tsconfig.json` file for us where we can declare our config for compiling our typescript code.

The `tsconfig.json` that is created will have default config for your typescript compiler, but here we change two things :

- `rootDir` : The `src/` folder where out `.ts` files reside.
- `outDir` : The `public/` folder where the compiled `.js` files reside.

```json
{
  "compilerOptions": {
    "target": "es5",
    //... other configs
    "outDir": "./public",
    "rootDir": "./src",
    // ... more configs
  }
}
```

With these configs, we can just use the following command to compile our `.ts` files:

```shell
tsc -w
```

But, there is another problem that we will face here. If any of our `.ts` files are outside the `src/` folder, those will be compiled too by the above command! This behavior is to be prevented!

Let's change the following property in `tsconfig.json`:

```json
{
  "compilerOptions" :{
    // ... compiler options
  },
  "include": ["src"]
}
```

This property will only compile the `.ts` files that are inside the `src/` folder.

## Function Basics

Once a function variable is declared, we cannot change it to any other type!

```ts
let greet = () => {
  console.log('Hello World!')
}

// greet = 'Hello World'; will result in an error
```

We can declare a variable as a function with explicit type declaration, like so:

```ts
let greet: Function

sayHello = () => {
  console.log('Hello Again!')
}
```

> NOTE: The type of `Function` is with a _capital F_!

### Default and optional parameters

Consider the following example to better illustrate this behavior:

```ts
const add = (a: number, b: number, c?: number|string) => {
  console.log(a+b)
  console.log(c)
}

add(5,10) // 15, undefined
add(2,3,'20') // 5, '20'
```

Notice the `?` that we have placed in front of variable `c`? That represents an optional parameter which can either be a `string` or a `number`.

If we `log` the value of an optional parameter that is not defined, it will result in `undefined`.

For default values in parameters, we add the value in front of the optional parameter:

```ts
const add = (a: number, b: number, c: number|string = 10) => {
  console.log(a+b)
  console.log(c)
}

add(5,10) // 15, 10
```

#### Returning values from within functions

When a function returns a value from a function, the variable in which we store this value will have the type of the value that is returned from the function!

This is inferred by typescript automatically. Have a look at the example below:

```ts
const minus = (a: number, b: number) => {
  return a+b
}

let result = minus(19,7);
```

In the above example, the variable `result` will have the type of `number`, since the function `minus()` returns the value `a+b`, which is a `number`.

Later on, if we replace the value of `return` with any type other than `number`, we will encounter an error.

#### Explicity declare return type of functions

This is optional because typescript automatically infers this from the `return` statement inside the function, but if we want to explicity declare what the function return type is, we can do it in the following way:

```ts
const minus = (a: number, b: number): number => {
  return a+b
}

let result = minus(10,7);
```

The explicit type is declared after the parameter parenthesis `()`.

**What if we do not return from a variable and there is no explicit declaration of function return type?**

In this case, typescript assigns the `void` type to the function. We can also explicity add this to a function like we did above.

```ts
const add = (a: number, b: number, c: number|string = 10): void => {
  console.log(a+b)
  console.log(c)
}

add(5,10) // 15, 10
```

## Type Aliases

When we're working with functions and we take in parameters with type specification, these can get long and tedious to read sometimes. Have a look at the example below:

```ts
const logDetails = (uid: string | number, item: string): void => {
  console.log(`${item} has a uid of ${uid}`)
}

const greetA = (user: {name: string, uid: string | number}): void => {
  console.log(`${user.name} says hello!`)
}

const greetB = (user: {name: string, uid: string | number}): void => {
  console.log(`${user.name} says hello too!`)
}
```

We might use the same kind of type specifications, which leads to repeated code. We can avoid this by using type aliases:

```ts
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
```

We can see a significant amount of code reduction, that we were previously writing redundantly. This is a very useful feature of typescript!

## Function Signatures

We have seen how to assign a function to a variable:

```ts
let greet: Function
```

Let's go one step further to define a functon signature, which will let us know what kind of function a variable can hold. A function signature defines the basic structure of the function, which here basically is what type of data it receives and what type of data it returns.

```ts
let greet: () => void
```

The above function signature specifies that the function `greet` takes no parameters and has return type of `void`.

Below are some self-explanatory examples which specify function signatures:

```ts

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

// using type aliases
type person = {name: string, age: number}

logDet = (player: person) =>{
  console.log(`${player.name} is ${player.age} years old`)
}
```

## The DOM and Typecasting

We can use the same methods that are present in vanilla JS with typescript as well, but with a few restrictions.

Let's consider the following example:

```ts
const anchor = document.querySelector(a)

console.log(anchor)
console.log(anchor.href) // will point to an error
```

We can notice the first thing here, that logging `anchor.href` gives us an error saying that the `a` or anchor tag might be empty! We know that our anchor tag is not empty, but the typescript file does not since it does not directly connect with the `index.html` file.

There are two ways to overcome this issue:

```ts
// 1. basic if() check
if(anchor) console.log(anchor)

// 2. using the `!` operand at the end of querySekector()
const anchor = document.querySelector('a')!
```

The first method is fairly simple. The second method, where we use the `!` operand, is to signify that we, as developers, know that the anchor tag is not empty, and hence we add the `!` excalamation operand to signify the same. The error is now gone!

**Typescript for DOM interactions automatically contains special types for every DOM element.**

If you hover over the `anchor` variable, you can see the type as `HTMLAnchorElement`, which is shown as:

```ts
const anchor: HTMLAnchorElement
```

This means typescript knows all of the different properties and methods on that element type. This enables the intellisense in our editor to list all of these methods and properties for our HTML element in typescript.

Let's look at another example:

```ts
// grab an HTML form element

// 1. using the element type
const form1 = document.querySelector('form')! // has type : HTMLFormElement

// 2. Using the class defined on the form
const form2 = document.querySelector('.new-item-class')! // has type : Element
```

So, why is there a difference in type of element when we select the same form with different properties; one with the element name, and the other with the class defined on the form?

This is because when we grab an element with the element name, typescript knows what kind of element it is: an anchor tag, a form tag, etc. But when we use the `class` or `id` to grab an HTML DOM element, typescript does not know what kind of HTML element we have just queried! Hence the difference in the type!

A `class` or `id` can be applied to any different element in the HTML page. So typescript only knows that this will be some kind of an element, but does not know specifically what kind of element it is. To combat this, we can use something called `type casting`, to say what kind of element this is going to be, for the better understanding of typescript.

```ts
const form2 = document.querySelector('.new-item-class') as HTMLFormElement
```

Now when we hover over `form`, it shows us the type as `HTMLFormElement` instead of just `Element`.

### Event Listners and `valueAsNumber`

Its fairly simple to use event listners in typescript, since it is exactly the same as javascript!

```ts
// form
const form = document.querySelector('.new-item-form') as HTMLFormElement

// inputs
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event)=> {
  e.preventDefault();
  console.log(type.value)
  console.log(tofrom.value)
  console.log(details.value)
  console.log(amount.valueAsNumber)
})
```

> NOTE: By default, a number value is converted to string by javascript. To keep it as a number, we use `valueAsNumber` here.

## Classes

Classes in typescript are very similar to classes in javascript.

Let's declare a class for `Invoice` with a constructor to initialize the values to the class properties, along with a `format()` method to display some text on the console:

```ts
class Invoice {
  client: string
  details: string
  amount: number

  constructor(c: string, d: string, a: number){
    this.client = c
    this.details = d
    this.amount = a
  }

  format() {
    return `${this.client} owes $${amount} for ${details}`
  }
}
```

Let us now instantiate the class, or to say create objects for the class:

```ts
cosnt inv1 = new Invoice('mario', 'work on mario website', 250)
cosnt inv2 = new Invoice('luigi', 'work on luigi website', 300)

console.log(inv1, inv2)
```

We get two invoice objects here.

The cool thing about using classes for objects is that we can maybe create an array and only allow `Invoice` objects in the array. Here's how we'd do it:

```ts
const invoices: Invoice[] = []
invoices.push(inv1)
invoices.push(inv2)

console.log(invoices)
```

This will give us an array of objects, what are of type `Invoice`.

Currently, all of the class properties are public. This means we can change their value by accessing them directly:

```ts
inv1.client = 'sid'
```

The values change only for the particular instance/object of that class. Since we wouldn't want anyone to change the values of the class properties via the class instances, we can use access modifiers to limit this behavior.

### Access Modifiers: Public, Private & Readonly

All classes are public by default. The following two snippets of code are the same:

**Without access modifiers:**

```ts
class Invoice {
  client: string
  details: string
  amount: number
}
```

**With access modifiers:**
_[do not need to explicitly say `public`]_

```ts
class Invoice {
  public client: string
  public details: string
  public amount: number
}
```

Access modifiers are used to define how a user can access the different properties of a class.

Consider the following class properties:

```ts
class Invoice {
  readonly client: string
  private details: string
  public amount: number
}
```

- We can access `amount` property inside as well as outside the `Invoice` class.
- We can access `details` property only inside the class `Invoice`.
- We can access the `readonly` property inside as well as outside the class, but we cannot change the value of that property, both _inside and outside of the class_.

### Shorthand when using access modifiers for class properties

We can define all of the properties of the class inside the parenthesis `()` of the constructor and assign values as well.

**This only works if we are using access modifiers with our class properties.**

```ts
class Invoice {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ){}
}
```

## Modules

We need to break our code into different `modular files` for different components/parts of our web app. This is particularly useful when we are working on larger projects. We can have seperate files for say DOM interactions, another one for database interactions, yet another one for authentication, etc. This makes our project and code more structured, easier to comprehend and read.

The best way to do this in typescript is by using the `ES6 module` system, where we can `import` and `export` things from different files when we need to. Modern browsers support `ES6 modules` in vanilla JS, so we can use it in typescript as well.

We can overcome the "modern-browser-only" problem using `webpack` by bunding our code into one file, but that's for later.

Let's start using `modules` in our typescript code by changing the following property in `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "es2015
  }
}
```

One last thing we need to do in our `index.html` is to point to our script saying that the type of the script is a `module`, like so:

```html
<script type="module" src='app.js'></script>
```

Now, let's move the `Invoice` class into it's own seperate directory and a file called `Invoice.ts` inside the `src/` directory.

- Add the `export` keyword to the `Invoice` class, like so:

```ts
export class Invoice {
  // ...Invoice class code
}
```

- Now, we import this class in our `app.ts` file, but we reference the compiled `Invoice.js` file and not the `Invoice.ts` file here:

```ts
import { Invoice } from './classes/Invoice.js'
```

AAAND we're done! But there are two major drawbacks here:

- The `ES6 module` system is only supported by modern browsers.
- Doesn't bundle our code into a single file. We get seperate `app.js` and `classes/Invoice.js` files in our `public/` folder. Due to this, there are multiple requests which we can check in the dev-tools network tab. But this can be overcome using something called [webpack](https://webpack.js.org/).

## Interfaces

Interfaces allow us to enforce a certain structure to our classes or objects.

### Interfaces with Objects

_Example:_

```ts
// interfaces
interface IsPerson {
  name: string
  age: number
  speak(a: string): void
  spend(n: number): number
}

// const me: IsPerson = {} // will be an error since it does not match the structure of type IsPerson
let someone: IsPerson // can define it later, this is not an error
const me: IsPerson = {
  name: 'sid',
  age: 25,
  speak(text: string): void {
    console.log(text)

  },
  spend(amount: number): number {
    return amount
  }
}
```

Here, even if we try to add a new property to the `me` object with `IsPerson` type, it will throw an error, because it does not follow the structure defined by the interface `IsPerson`.

**Using the object defined by the interface in a function:**

```ts
const greetPerson = (person: IsPerson): void => console.log('hello', person.name)
// greetPerson({name: 'sid'}) // error, since it does not match `IsPerson` structure
greetPerson(me) // hello sid
```

### Interfaces with Classes

Let's create a `interfaces/` directory inside the `src/` folder. Inside this, we'll add a `HasFormatter.ts` file which will be an interface with a function called `format()` with return type as `string`:

```ts
export interface HasFormatter {
  format(): string
}
```

Next, we need to `import` this interface **(from the `.js` file)** in our `Invoice` class, so that it is `implemented` in it:

```ts
import { HasFormatter } from '../interfaces/hasFormatter.js'

export class Invoice implements HasFormatter {
  // ... Invoice class code
  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`
  }
}
```

Let's create another class that implements this `HasFormatter` interface.

```ts
export interface HasFormatter {
  format(): string
}
```

Next, in our `app.ts`, we can use this interface like so:

```ts
import { Invoice } from './classes/Invoice.js'
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js'

let doc1: HasFormatter
let doc2: HasFormatter

doc1 = new Invoice('yoda', 'webwork', 100)
doc2 = new Payment('anakin', 'devops', 200)

let docs: HasFormatter[] = []
docs.push(doc1)
docs.push(doc2)

docs.forEach(doc=>console.log(doc.format()))
```

## Generics

Generics allow us to write reusable blocks of code, which can be used with different types.

_Example:_

```ts
const addUID = (obj: object) => {
  let uid = Math.floor(Math.random()*100)
  return {...obj, uid}
}

let doc1 = addUID({name: 'yoshi', age: 30})

console.log(doc1)
```

This looks like it works just fine, but there is one problem here. When we try to access the `name` or the `age` property on `doc1`, we are unable to do that, and we get an error on doing

```ts
console.log(doc1.name)
```

This is because when we declare the object in the `addUID` function, we are not declaring what are the properties of this object; and it doesn't know what properties of the object we are returning from the function as well, since we are destructuring it.

We can comabt this by using a `generic`. We can do this by placing `<T>` in front of the function parameter parenthesis. We can use any character other than `T` here, but in most standard code, we use `T`.

```ts
const addUID = <T>(obj: T) => {
  let uid = Math.floor(Math.random()*100)
  return {...obj, uid}
}

let doc1 = addUID({name: 'yoshi', age: 30})

console.log(doc1.name, doc1.age, doc1.uid)
```

Here, we do not specify what is the type of `obj`, we just capture the type of `T` when we call the function `addUID`. We no longer explicitly say that `obj` is an `object` type.

But `T` here does not explicitly mean we are using an `object` type. We can do something like:

```ts
let doc2 = addUID('hello')
```

This will not give an error. To overcome this drawback, we need to specify that `T` should `extend` an `object` type:

```ts
const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random()*100)
  return {...obj, uid}
}
```

We can also `extend` a specific type of object here:

```ts
const addUID = <T extends {name: string}>(obj: T) => {
  let uid = Math.floor(Math.random()*100)
  return {...obj, uid}
}

let doc2 = addUID(name: 'hello')
```

Now this will allow objects which have the name property.

### Using generics with interfaces

Consider the following example:

```ts
interface Resource {
  uid: number
  resourceName: string
  data: '???'
}
```

Here, we want the `data` to not be strict about the type, we want it's type to be `generic`. Here's how we do it using generics:

```ts
interface Resource<T> {
  uid: number
  resourceName: string
  data: T
}
```

This helps us in declaring different data types for the `data` property of the interface:

```ts
const doc3: Resource<object> = {
  uid: 123,
  resourceName: 'person',
  data: {name: 'siddharth'}
}
const doc4: Resource<string> = {
  uid: 123,
  resourceName: 'person',
  data: 'siddharth'
}
const doc5: Resource<string[]> = {
  uid: 456,
  resourceName: 'persons',
  data: ['sid', 'mario', 'luigi']
}
```

## Enums

Enums are a special type in typescript, which allow us to store a set of constants or keywords and associate them with a numeric value.

```ts
interface Resource<T> {
  uid: number
  resourceType: number
  data: T
}
```

Consider the above example where we asscociate a specific thing with the `resourceType`, which is a `number`. We could have `1` associated with `book`, `2` with `author`, and so on. This seems okay with a small dataset, but with really large datasets, we would have to keep looking back at the mappings for these numeric values for their `string` counterpart values. This seems tedious right? This is where `enums` come into play.

Here's how we create an enum for the above example `resourceType`.

```ts
enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}
```

Each of the above keywords in the enum have index numbers which start from 0, and are assigned to `resourceType`.

So now in our interface, we use this `enum` as the type for `resourceType`:

```ts
interface Resource<T> {
  uid: number
  resourceType: ResourceType
  data: T
}
```

And now we can access the enum as such:

```ts
const doc3: Resource<object> = {
  uid: 123,
  resourceName: ResourceType.AUTHOR,
  data: {name: 'siddharth'}
}
const doc4: Resource<string> = {
  uid: 123,
  resourceName: ResourceType.BOOK,
  data: 'siddharth'
}
const doc5: Resource<string[]> = {
  uid: 456,
  resourceName: ResourceType.FILM,
  data: ['sid', 'mario', 'luigi']
}
```

## Tuples

These are a little bit like arrays, and we use arrays to define them. We can also use the same array methods with tuples.

The one major difference between tuples and arrays is the types of data in each position in a tuple is fixed once it has been initialised.

Let's have a look at the arrays:

```ts
let arr = ['ryu', 35, true]
arr[0] = true
arr[1] = 'mario'
arr = [30, false, 'luigi']
```

Notice that we can change the values and their types in an array. Now have a look at a tuple:

```ts
let tup: [string, number, boolean] = ['mario', 25, true]
```

Since we have defined that index 0 should have a `string` type, index 1 `number` and index 2 `boolean`, we cannot have a value with type different from the ones defined.

But, we can change the values to the same fixed type:

```ts
tup[0] = 'luigi'
tup[1] = 30
tup[2] = false
```
