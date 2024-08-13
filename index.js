class Stack {
  constructor() {
    this.items = [];
  }

  add(item) {
    this.items.push(item);
  }

  remove() {
    if(this.isEmpty()) {
      return `There's nothing in the stack to remove`;
    }

    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  count() {
    return this.items.length;
  }
}



// class Car {
//   constructor() {
//     this.doorCount = 4;
//     this.wheelCount = 4;
//     this.color = 'blue';
//     this.fuelSource = 'gas';
//   }

//   driveFast() {
//     return `LET'S GOOOOOO!!!!`
//   }

//   changeColor(newColor) {
//     this.color = newColor;
//   }
// }

// class ElectricCar extends Car {
//   constructor() {
//     super();
//     this.fuelSource = 'electric';
//     this.doorCount = 3;
//   }
// }

// class Truck extends Car {
//   constructor() {
//     super();
//     this.bedSize = 100;
//   }
// }

// const fiora = new Car();
// fiora.changeColor('red');


// const sarah = new ElectricCar();
// const bill = new Car();
// const greg = new Truck();

// const myCar = new ElectricCar();
// myCar.changeColor('purple');

// console.log(typeof myCar);

// const yourCar = new ElectricCar();

// console.log(yourCar);