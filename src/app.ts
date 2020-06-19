import { Invoice } from './classes/Invoice.js'

// interfaces with objects
interface IsPerson {
  name: string
  age: number
  speak(a: string): void
  spend(n: number): number
}

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

const greetPerson = (person: IsPerson): void => console.log('hello', person.name)

greetPerson(me)

// instantiate the class OR create objects of the class
const invoice1 = new Invoice('mario', 'work on mario website', 250)
const invoice2 = new Invoice('luigi', 'work on luigi website', 300)

// invoice1.client = 'sid' cannot be accessed as it is readonly now
let invoices: Invoice[] = []
invoices.push(invoice1)
invoices.push(invoice2)
// console.log(invoices);

invoices.forEach(inv=>console.log(inv.client, inv.amount, inv.format()))


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