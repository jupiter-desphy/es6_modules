import Car from "./car";
/*
export class Car {
    constructor(id, make, model, year) {
        this.id = id;
        this.make = make;
        this.model = model;
        this.year = year;
    }
}
*/
class WishList {
    constructor () {
    this.list = [];
    this.nextID = 0;
    }
    add (make, model, year) {
        let car = new Car (this.nextID++, make, model, year);
        this.list.push (car);
        console.log (this.list); // optional
    }
    remove (id) {
        let idx = this.list.findIndex((car) => car.id === id)
        this.list.splice (idx, 1)
    }

}

export default WishList;