// classes
export class Invoice {
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
