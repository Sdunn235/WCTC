
function Restaurant(restaurantImage, restaurantName, restaurantAddress, isGlutenFree, isVegan, isLocal, rating, review)
{
    this.restaurantImage = restaurantImage;
    this.restaurantName = restaurantName;
    this.restaurantAddress = restaurantAddress;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isLocal = isLocal;
    this.rating = rating;
    this.review = review;
    this.createElement = function() 
    {

        const restaurantElement = document.createElement('div');
        
        restaurantElement.classList.add('restaurant');

        restaurantElement.innerHTML = 
        `
        <img src="${this.restaurantImage}" alt="${this.restaurantName}">
        <div class="restaurant-data">
            <span class="restaurant-name">${this.restaurantName}</span>
            <span class="restaurant-address">${this.restaurantAddress}</span>
            <span class="restaurant-isGluten">Are They Gluten Free: ${this.isGlutenFree}</span>
            <span class="restaurant-isVegan">Are They Vegan: ${this.isVegan}</span>
            <span class="restaurant-isLocal">Are They Local: ${this.isLocal}</span>
            <span class="restaurant-rating">Rating: ${this.rating}/5</span>
            <span class="restaurant-review">${this.review}</span>
        </div>
        `
        return restaurantElement;
    }
};

let allRestaurants = [
    new Restaurant('images/Macho.png','Macho Meals', '337 St. Paul Ave.', 'No', 'No', 'No', 4, 'Generous portions and hearty comfort food. The burgers are juicy and the fries are perfectly crispy. Great value for the price.'),
    new Restaurant('images/Veganic.png','Veganic Corner', '24 S. Buckingham Road', 'Yes', 'Yes', 'Yes', 3, 'Fresh organic ingredients and creative plant-based dishes. The atmosphere is cozy and welcoming. A solid choice for health-conscious diners.'),
    new Restaurant('images/Sherryl.png','Sherryl Meals', '7897 Glen Eagles Court', 'Yes', 'No', 'No', 4, 'Excellent gluten-free options without compromising on taste. The staff is knowledgeable about dietary restrictions. Highly recommended for those with celiac disease.'),
    new Restaurant('images/SaladHeaven.png','Salad Heaven', '593 Harvey Street', 'No', 'Yes', 'Yes', 3, 'Wide variety of fresh salads with unique dressings. Locally sourced produce makes a noticeable difference. Perfect for a light, healthy lunch.'),
    new Restaurant('images/RootShoot.png','Root Shoots', '18 South Chapel Street', 'Yes', 'Yes', 'Yes', 2, 'Ambitious menu but inconsistent execution. The vegan options are interesting but service can be slow. Room for improvement in flavor profiles.'),
    new Restaurant('images/GrillMonguls.png','Grill Moguls', '40 State Rd.', 'Yes', 'No',	'No', 4, 'Master of the grill with perfectly cooked steaks and seafood. Gluten-free menu is extensive and delicious. The smoky flavors are unforgettable.'),
    new Restaurant('images/NovaFood.png','NovaFood', '9026 Jones Rd.', 'Yes', 'Yes', 'No', 2, 'Modern fusion cuisine that sometimes misses the mark. Vegan and gluten-free options available but flavors need refinement. Service is friendly though.'),
    new Restaurant('images/Sangli.png','Sangli', '426 Summerhouse Ave.', 'No', 'No', 'No', 5, 'Absolutely phenomenal dining experience from start to finish. Every dish is perfectly seasoned and beautifully presented. A must-visit destination restaurant.'),
    new Restaurant('images/Lavoya.png','Lavoya Diner', '83 Beacon Lane', 'Yes', 'No', 'Yes', 3, 'Classic diner fare with a local twist. Breakfast is their strong suit with fluffy pancakes and crispy bacon. Comfortable atmosphere for families.'),
    new Restaurant('images/Andisova.png','Andisova', '474 Mayfield Ave.', 'Yes', 'No', 'No', 1, 'Unfortunately disappointing across the board. Food was cold and service was inattentive. Needs significant improvements in quality and consistency.'),
];


function filteringLoop() {
    let resultElement = document.getElementById('sorting-result');
    resultElement.innerHTML = '';
    const restaurantName = document.getElementById('restaurant-name').value;
    // Getting values from radio button groups using querySelector
    // Learn more: https://www.w3schools.com/cssref/sel_checked.asp
    // Format: document.querySelector('input[name="group-name"]:checked').value
    // This finds the currently selected radio button in a group and gets its value
    const restaurantIsGlutenFree = document.querySelector('input[name="restaurant-isGluten"]:checked').value;
    const restaurantIsVegan = document.querySelector('input[name="restaurant-isVegan"]:checked').value;
    const restaurantIsLocal = document.querySelector('input[name="restaurant-isLocal"]:checked').value;
    const restaurantRating = Number(document.getElementById('restaurant-rating').value);
    
    // Loop through all students in the array
    for (let i = 0; i < allRestaurants.length; i++) 
    {
        const restaurant = allRestaurants[i];
        
        // Single if statement that handles all filter combinations
        if ((restaurantName === 'All' || restaurantName === restaurant.restaurantName) &&
            (restaurantIsGlutenFree === 'Yes' && restaurant.isGlutenFree === 'Yes' || restaurantIsGlutenFree === 'No') && 
            (restaurantIsVegan === 'Yes' && restaurant.isVegan === 'Yes' || restaurantIsVegan === 'No') &&
            (restaurantIsLocal === 'Yes' && restaurant.isLocal === 'Yes' || restaurantIsLocal === 'No') &&
            (restaurant.rating <= restaurantRating)
           )
        {
            const currentRestaurantElement = allRestaurants[i].createElement();
            resultElement.appendChild(currentRestaurantElement);
        }
    }
}

// Call function to display initial results when page loads
filteringLoop();

// Simple function to add a new restaurant to the array
function addNewRestaurant() {
    // Get values from form inputs
    const newName = document.getElementById('new-restaurant-name').value;
    const newAddress = document.getElementById('new-restaurant-address').value;
    const newImage = document.getElementById('new-restaurant-image').value || 'https://placehold.co/400';
    const newIsGlutenFree = document.querySelector('input[name="new-restaurant-isGluten"]:checked').value;
    const newIsVegan = document.querySelector('input[name="new-restaurant-vegan"]:checked').value;
    const newIsLocal = document.querySelector('input[name="new-restaurant-local"]:checked').value;
    const newRating = Number(document.getElementById('new-restaurant-rating').value);
    const newReview = document.getElementById('new-restaurant-review').value;
    
    // Basic validation
    if (!newName || !newAddress || !newReview) {
        alert('Please fill in all required fields (Name, Address, and Review).');
        return;
    }
    
    // Create new restaurant object and add to array
    const newRestaurant = new Restaurant(
        newImage,
        newName,
        newAddress,
        newIsGlutenFree,
        newIsVegan,
        newIsLocal,
        newRating,
        newReview
    );
    
    allRestaurants.push(newRestaurant);
    
    // Clear the form
    document.getElementById('add-restaurant-form').reset();
    
    // Update the restaurant name dropdown to include new restaurant
    updateRestaurantDropdown();
    
    // Refresh the filtered results
    filteringLoop();
    
    alert('Restaurant added successfully!');
}

// Function to update the restaurant name dropdown with new restaurants
function updateRestaurantDropdown() {
    const dropdown = document.getElementById('restaurant-name');
    
    // Clear existing options except "All"
    dropdown.innerHTML = '<option value="All">Any Restaurant</option>';
    
    // Add all restaurant names to dropdown
    for (let i = 0; i < allRestaurants.length; i++) {
        const option = document.createElement('option');
        option.value = allRestaurants[i].restaurantName;
        option.textContent = allRestaurants[i].restaurantName;
        dropdown.appendChild(option);
    }
}

// Call function to display initial results when page loads
filteringLoop();

// Add event listener for the add restaurant button
document.getElementById('add-restaurant-btn').addEventListener('click', function(event) {
    event.preventDefault();
    addNewRestaurant();
});


