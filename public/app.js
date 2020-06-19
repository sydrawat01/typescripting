"use strict";
// const anchor = document.querySelector('a')!
// if(anchor) console.log(anchor.href)
// console.log(anchor.href);
// const form = document.querySelector('form')! // type: HTMLFormElement
// const form = document.querySelector('.new-item-form')! // type: Element
var form = document.querySelector('.new-item-form');
// console.log(form.children)
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
