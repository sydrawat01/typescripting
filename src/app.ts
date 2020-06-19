import { Invoice } from './classes/Invoice.js'
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js'

// let doc1: HasFormatter
// let doc2: HasFormatter

// doc1 = new Invoice('yoda', 'webwork', 100)
// doc2 = new Payment('anakin', 'devops', 200)

// let docs: HasFormatter[] = []
// docs.push(doc1)
// docs.push(doc2)

// docs.forEach(doc=>console.log(doc.format()))

// interfaces with objects
// interface IsPerson {
//   name: string
//   age: number
//   speak(a: string): void
//   spend(n: number): number
// }

// const me: IsPerson = {
//   name: 'sid',
//   age: 25,
//   speak(text: string): void {
//     console.log(text)

//   },
//   spend(amount: number): number {
//     return amount
//   }
// }

// const greetPerson = (person: IsPerson): void => console.log('hello', person.name)

// greetPerson(me)

// instantiate the class OR create objects of the class
// const invoice1 = new Invoice('mario', 'work on mario website', 250)
// const invoice2 = new Invoice('luigi', 'work on luigi website', 300)

// // invoice1.client = 'sid' cannot be accessed as it is readonly now
// let invoices: Invoice[] = []
// invoices.push(invoice1)
// invoices.push(invoice2)
// // console.log(invoices);

// invoices.forEach(inv=>console.log(inv.client, inv.amount, inv.format()))


// form
const form = document.querySelector('.new-item-form') as HTMLFormElement

// inputs
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event)=> {
  e.preventDefault();
  let doc: HasFormatter
  if(type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
  }
  console.log(doc)
})