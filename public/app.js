import { Invoice } from './classes/Invoice.js';
const me = {
    name: 'sid',
    age: 25,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        return amount;
    }
};
const greetPerson = (person) => console.log('hello', person.name);
greetPerson(me);
// instantiate the class OR create objects of the class
const invoice1 = new Invoice('mario', 'work on mario website', 250);
const invoice2 = new Invoice('luigi', 'work on luigi website', 300);
// invoice1.client = 'sid' cannot be accessed as it is readonly now
let invoices = [];
invoices.push(invoice1);
invoices.push(invoice2);
// console.log(invoices);
invoices.forEach(inv => console.log(inv.client, inv.amount, inv.format()));
// form
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value);
    console.log(tofrom.value);
    console.log(details.value);
    console.log(amount.valueAsNumber);
});
