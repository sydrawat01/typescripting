"use strict";
// classes
var Invoice = /** @class */ (function () {
    // readonly client: string
    // private details: string
    // public amount: number
    // class constructor to initialize class properties
    // constructor(c: string, d: string, a: number) {
    //   this.client = c
    //   this.details = d
    //   this.amount = a
    // }
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
// instantiate the class OR create objects of the class
var invoice1 = new Invoice('mario', 'work on mario website', 250);
var invoice2 = new Invoice('luigi', 'work on luigi website', 300);
// invoice1.client = 'sid' cannot be accessed as it is readonly now
var invoices = [];
invoices.push(invoice1);
invoices.push(invoice2);
// console.log(invoices);
invoices.forEach(function (inv) { return console.log(inv.client, inv.amount, inv.format()); });
// form
var form = document.querySelector('.new-item-form');
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value);
    console.log(tofrom.value);
    console.log(details.value);
    console.log(amount.valueAsNumber);
});
