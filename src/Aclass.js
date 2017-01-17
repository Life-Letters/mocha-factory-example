// This is a class to showcase how to test functions and methods of a Class.
// The test file test/unit/Aclass-test.js will show how to test these methods

export default class Aclass {

  constructor(){

    this.add = a => b => {
      return a + b;
    }

    this.addOne = this.add(1);

    this.addTwo = this.add(2);

  }

}
