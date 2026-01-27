$(function () {

    function Recipe(name, description,imgUrl) {
        this.name = name;
        this.description = description;
        this.imgUrl = imgUrl;
        this.createElement = function () {
            const recipe = document.createElement('div');
            recipe.classList.add('recipe');
            recipe.innerHTML = `
            <div class="row">
                <div class-"flex-1">
                    <img src="${this.imgUrl}">
                </div>
            </div>
                <div class ="flex-3"
                    <h4>${this.name}</h4>
                    <p>${this.description}</p>
                </div>
            </div>
        `;
            return recipe;
        }
    }

    const recipes = [
        new Recipe('Pasta Carbonara', 'A classic Italian dish made with spaghetti, eggs, bacon, and Parmesan cheese.',"images/pasta.jpg"),
        new Recipe('Chicken Curry', 'A spicy Indian dish made with chicken, tomatoes, onions, and a blend of aromatic spices.'),
        new Recipe('Beef Stroganoff', 'A hearty Russian dish made with beef, mushrooms, onions, and sour cream.'),
        new Recipe('Fish Tacos', 'A fresh and flavorful Mexican dish made with grilled fish, avocado, salsa, and lime.'),
        new Recipe('Vegetable Stir-Fry', 'A healthy and colorful Chinese dish made with a variety of vegetables and a savory sauce.')
    ];

    //Each is iterates through each item in a collection and is q jQuery method. An array can be converted to a jQuery object by wrapping it in $().
    $(recipes).each(function () {
        // "this" is a single recipe
        $('.recipes-list').append(this.createElement());
    });




    /* =============== PART ONE =============== */
    //Add an event listener for the 'submit' event of form#add-recipe-form
    //  -prevent the default action of the event
    //  -get the values of the name and description inputs
    //  -create a new Recipe object with the values from the inputs
    //  -append the new Recipe's element to .recipes-list
    //  -reset the form



    /* =============== PART TWO =============== */
    //Add an event listener to .recipes>.tabs that checks the target of the event. 
    //  -IF the target's tagName/nodeName is li AND the target does NOT CONTAIN have the class active:
    //      -remove the class of target from the other tab and add it to the new tab
    //      -swap the class of hidden between .recipes-add and .recipes-view
    //  -ELSE
    //      -do nothing
    $('.tabs').on('click', function(e){
        e.preventDefault();
        
        // $ as the prefix for variables that hold JQuery objects
        const $target = $(e.target);

        // use JQuery to get the value of the 'tab' data attribute
        // -data method gives us the value of the data attribute
        const tabName = $target.data('tab')

        if(tabName) // undefined is falsy
        {
            if(tabName == 'add')
            {
                $('.recipes-view').addClass('hidden')
                $('.recipes-add').removeClass('hidden')
                $('.tabs .active').removeClass('active')
                $target.addClass('active')
            }
            else if (tabName == 'view')
            {
                $('.recipes-add').addClass('hidden')
                $('.recipes-view').removeClass('hidden')
                $('.tabs .active').removeClass('active')
                $target.addClass('active')
            }   
        }         
    })
    $('#add-recipe-form').on('submit', function(e){
        e.preventDefault();

        const name = $('#recipe-form-name').val() //This is the Jquery equivalent to.value
        const description = $('#recipe-form-description').val()

        const newRecipe = new Recipe(name, description)

        recipes.push(newRecipe);

        $('.recipe-list').append(newRecipe.createElement())

        //this is an HTMLElement Object
        this.reset()
    })

});
