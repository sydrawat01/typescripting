/*
 * 1. register a list container (ul) in the constructor
 * 2. create a render method to render a new 'li' element to the container
 *   -- accepts all arguements: invoice/payment, a heading, a position
 *   --create the HTML template (li, h4, p)
 *   --  add the 'li' template to the start/end of the list
 */
export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    format() {
        throw new Error("Method not implemented.");
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerHTML = item.format();
        li.append(p);
        if (pos === 'start')
            this.container.prepend(li);
        else
            this.container.append(li);
    }
}
