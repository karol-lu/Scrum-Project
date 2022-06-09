// NEW RECIPE
//
// recipe input
const recipeName = document.querySelector(".recipe_name");
const recipeDescription = document.querySelector(".recipe_description");
const recipeInstructions = document.querySelector(".recipe_instructions_text");
const recipeIngredients = document.querySelector(".recipe_ingredients_text");

//recipe buttons
const btnNewRecipe = document.querySelector(".recipe_save");
const btnInstruction = document.querySelector("#add_instruction");
const btnIngredients = document.querySelector("#add_ingredient");

//recipe lists
const newInstructionList = document.querySelector(".recipe_instructions_list");
const newIngredientsList = document.querySelector(".recipe_ingredients_list");

const newRecipe = {
    title:"",
    description:"",
    instructions: [],
    ingredients: [],
}

function renderInstruction(instruction) {
    let newLi = document.querySelector(".recipe_instructions_list_item").cloneNode(true);

    newLi.firstElementChild.innerText = instruction;
    newInstructionList.appendChild(newLi);
}

btnInstruction.addEventListener("click", event => {
    event.preventDefault();

    newRecipe.instructions.push(recipeInstructions.value);
    renderInstruction(recipeInstructions.value);
    recipeInstructions.value= "";
});

function renderIngredients(ingredient) {
    let newLi = document.querySelector(".recipe_ingredients_list_item").cloneNode(true);

    newLi.firstElementChild.innerText = ingredient;
    newIngredientsList.appendChild(newLi);
}

btnIngredients.addEventListener("click", event => {
    event.preventDefault();

    newRecipe.ingredients.push(recipeIngredients.value);
    renderIngredients(recipeIngredients.value);
    recipeIngredients.value= "";
});


function saveRecipeToLocalStorage(newObject) {
    let dataFromLocalStorage=[];

    if (localStorage.getItem("recipes") !== null) {
        dataFromLocalStorage = JSON.parse(localStorage.getItem("recipes"));
        dataFromLocalStorage.push(newObject);
    } else {
        dataFromLocalStorage.push(newObject);
        localStorage.setItem("recipes", JSON.stringify(dataFromLocalStorage));
    }
    alert("Przepis zapisany do localSorage");
}

btnNewRecipe.addEventListener("click", event => {
    event.preventDefault();

    newRecipe.title = recipeName.value;
    newRecipe.description = recipeDescription.value;

    saveRecipeToLocalStorage(newRecipe);
    recipeName.value="";
    recipeDescription.value="";
    console.log("zapisano:", newRecipe);
});

const newRecipeSection = document.querySelector('.new_recipes');
const newRecipeBtnSave = document.querySelector('.recipe_save');
const valueID = document.querySelector('.recipes_box_table_tbody .row:last-child td:first-child')
console.log(valueID.innerText);
const showHideRecipes = () => {
    newRecipeSection.classList.add('hide');
    recipesSection.classList.remove('hide');
};

// const nextID = () => Number(valueID.innerText) + 1;
// const createNewRow = () => {
//
//     const newID = document.createElement('td');
//     const newName = document.createElement('td');
//     const newDescription = document.createElement('td');
//     const newAction = document.createElement('td').cloneNode(false);
//
//     newID.innerText = nextID();
//     newName.innerText = localStorage.getItem('title')
//     newDescription.innerText = localStorage.getItem('description')
//
//
// }

newRecipeBtnSave.addEventListener('click', () => {
    showHideRecipes();
    // createNewRow();
});