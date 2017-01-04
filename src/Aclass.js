export default class Aclass {

  constructor(){

    this.add = a => b => {
      return a + b;
    }

    this.addOne = this.add(1);

    this.addTwo = this.add(2);

  }

}
