
const make = document.getElementById('make');
const model = document.getElementById('model');
const year = document.getElementById('year');
const form = document.getElementById('addVehicleForm');
const vehiclesList = document.getElementById('vehiclesList');// FIX: matched HTML id

function addVehicle() {
    const vehicle = new Vehicle();
    vehiclesList.appendChild(vehicle.createDiv());// FIX: vehiclesList now points correctly
    form.reset();
}

function Vehicle() {
    this.make = make.value;
    this.model = model.value;
    this.year = year.valueAsNumber;

    this.createDiv = function () { // FIX: bound to instance using "this."
        const div = document.createElement('div');
        div.classList.add('vehicle');
        div.innerHTML =
            `<span class="vehicle-year">${this.year}</span>
            <span class="vehicle-make">${this.make}</span>   <!-- <— fix: make, not name -->
            <span class="vehicle-model">${this.model}</span>`;
        return div;
    };
}
