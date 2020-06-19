// classes
class Invoice {
  // readonly client: string
  // private details: string
  // public amount: number

  // class constructor to initialize class properties
  // constructor(c: string, d: string, a: number) {
  //   this.client = c
  //   this.details = d
  //   this.amount = a
  // }
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ){}

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`
  }
}

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