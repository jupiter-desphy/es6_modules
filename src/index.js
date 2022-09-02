

console.log("Hello World");

// TODO
import WishList from "./wishlist";
/*
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
*/
let form = document.getElementById("submitForm");
let makeInput = document.getElementById("makeInput");
let modelInput = document.getElementById("modelInput");
let yearInput = document.getElementById("yearInput");
let carMakeP = document.getElementById("car-make");
let carModelP = document.getElementById("car-model");
let carYearP = document.getElementById("car-year");
let removeBtn = document.getElementById("removeBtn");
let list = document.querySelector("#wishListContainer > ul");

let wishlist = new WishList()

form.addEventListener("submit", addCar)
removeBtn.addEventListener("click", removeCar);



//update the ul with latest cars
function updateDOMList() {
    list.innerHTML = "";

    wishlist.list.forEach((car) => {
        const li = document.createElement("li");
        li.textContent = `${car.make} ${car.model}`;
        li.addEventListener("click", () => showCarDetails(car));
        list.appendChild(li);
    });
}

function showCarDetails(car) {
    carMakeP.textContent = car.make;
    carModelP.textContent = car.model;
    carYearP.textContent = car.year;
    removeBtn.disabled = false;
    removeBtn.setAttribute("data-carID", car.id);
}

function addCar (event) {
    event.preventDefault();

    let make = makeInput.value;
    let model = modelInput.value;
    let year = yearInput.value; 

    wishlist.add(make, model, year);

    updateDOMList();
}

function removeCar () {
    let carID = Number(removeBtn.getAttribute("data-carId"));
    wishlist.remove(carID);
    updateDOMList();
    carMakeP.textContent = "";
    carModelP.textContent = "";
    carYearP.textContent = "";
    removeBtn.disabled = "true";
}