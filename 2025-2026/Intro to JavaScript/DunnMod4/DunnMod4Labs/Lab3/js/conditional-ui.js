 $(function () {

    // Constructor function for Car
    function Car(name, doors) {
        this.name = name;
        this.doors = doors;
        this.createElement = function () {
            const car = document.createElement('div');
            car.classList.add('car');
            car.innerHTML = `
                <h4>${this.name}</h4>
                <em>${this.doors} doors</em>
            `;
            return car;
        }
    }

    // Constructor function for Plane
    function Plane(name, wingspan) {
        this.name = name;
        this.wingspan = wingspan;
        this.createElement = function () {
            const plane = document.createElement('div');
            plane.classList.add('plane');
            plane.innerHTML = `
                <h4>${this.name}</h4>
                <em>${this.wingspan} foot wingspan</em>
            `;
            return plane;
        }
    }

    // Constructor function for Boat
    function Boat(name, hullLength) {
        this.name = name;
        this.hullLength = hullLength;
        this.createElement = function () {
            const boat = document.createElement('div');
            boat.classList.add('boat');
            boat.innerHTML = `
                <h4>${this.name}</h4>
                <em>${this.hullLength} foot hull</em>
            `;
            return boat;
        }
    }

    const cars = [
        new Car('Honda Odyssey', 4),
        new Car('Toyota Sera', 2),
        new Car('Ford F-150', 4)
    ];

    const planes = [
        new Plane('Boeing 747', 224),
        new Plane('Airbus A380', 262),
        new Plane('Boeing 787', 197)
    ];

    const boats = [
        new Boat('Sea Ray Sundancer', 27),
        new Boat('Crestliner Retriever', 18),
        new Boat('Chaparral SE', 21)
    ];

    /* =============== PART ONE =============== */
    //Loop through the cars, planes, and boats arrays
    //  -append each object's element to the correct list

    //Non JQuery way
    const carsListElement = document.querySelector('.cars-list');
    for (let i = 0; i < cars.length; i++) 
    {
        carsListElement.append(cars[i].createElement())
    }

    //JQuery way

    const $planesList = $('.planes-list') //$prefix means it holds a jquery object
    // each is basically a for loop
    //  -argument is an anonymous function that runs for each item in the jQuery Object
    $(planes).each(function(i, plane){
        $planesList.append(plane.createElement())
    })
    
    //Add in boats and pick however you want
    const $boatsList = $('.boats-list') //$prefix means it holds a jquery object
    // each is basically a for loop
    //  -argument is an anonymous function that runs for each item in the jQuery Object
    $(boats).each(function(i, boats){
        $boatsList.append(boats.createElement())
    })


    /* =============== PART TWO =============== */
    //Add the class of hidden to each form
    //Add an event listener for the select change:
    //  -get the value of the select
    //  -display the correct form by removing the hidden class
    //  -hide the other forms by adding the hidden class
    $('#vehicle-choice').on('change', function(e){
        e.preventDefault();
        $('.vehicle-form > form').addClass('hidden');
        $('#' + this.value + '-form').removeClass('hidden');
    })



    /* =============== PART THREE =============== */
    //Update the following event listener to:
    //  -prevent the default action of the event
    //  -push the new object to the correct array
    //  -append the new object's element to the correct list
    //  -reset the form

    document.getElementById('car-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const newCar = new Car(this.querySelector('#car-name').value, this.querySelector('#car-number-doors').valueAsNumber);
        cars.push(newCar);
        carsListElement.append(newCar.createElement())
    });




    /* =============== PART FOUR =============== */
    //Add event listeners for the plane and boat form submissions.
    $('#plane-form').on('submit', function(e){
        e.preventDefault();
        const planeName = $('#plane-name').val(); // this is jQuery's .value
        const planeWingspan = $('#plane-wingspan').val();
        const newPlane = new Plane(planeName, planeWingspan)
        planes.push(newPlane)
        $planesList.append(newPlane.createElement())
        this.reset();
    })

    
    $('#boat-form').on('submit', function(e){
        e.preventDefault();
        const boatName = $('#boat-name').val(); // this is jQuery's .value
        const boatHullLength = $('#boat-hull-length').val();
        const newBoat = new Boat(boatName, boatHullLength)
        boats.push(newBoat)
        $boatsList.append(newBoat.createElement())
        this.reset();
    })

});
