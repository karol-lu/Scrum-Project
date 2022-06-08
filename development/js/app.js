//button action

const addButton = document.querySelector('.action-icon-add');
const editButton = document.querySelectorAll('.action-icon-edit');
const deleteButton = document.querySelectorAll('.action-icon-trash');
const schedulesSection = document.querySelector('.schedules_box');
const newPlanSection = document.querySelector('.new_plan');
const newPlanBtn = document.querySelector('.new_plan_btn');

addButton.addEventListener('click', () => {
schedulesSection.classList.add('hide');
newPlanSection.classList.remove('hide');
});

newPlanBtn.addEventListener('click', () => {
    newPlanSection.classList.add('hide');
    schedulesSection.classList.remove('hide');
});


// NEW RECIPE

// recipe input
const recipeName = document.querySelector(".recipe_name");
const recipeDescription = document.querySelector(".recipe_description");
const recipeInstructions = document.querySelector(".recipe_instructions_text");
const recipeIngredients = document.querySelector(".recipe_ingredients_text");

// buttons 
const btnNewRecipe = document.querySelector(".recipe_save");
const btnInstruction = document.querySelector("#add_instruction");
const btnIngredients = document.querySelector("#add_ingredient");

// lists
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

btnInstruction.addEventListener("click", function(event) {
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

btnIngredients.addEventListener("click", function(event) {
  event.preventDefault();
  newRecipe.ingredients.push(recipeIngredients.value);
  renderIngredients(recipeIngredients.value);
  recipeIngredients.value= "";
 });
 

 function saveRecipeToLocalStorage(newObject) {
   let dataFromLocalStorage=[];

   if (localStorage.getItem("recipes") != null) {
     dataFromLocalStorage = JSON.parse(localStorage.getItem("recipes"));
     dataFromLocalStorage.push(newObject);
   } else {
     dataFromLocalStorage.push(newObject);
     localStorage.setItem("recipes", JSON.stringify(dataFromLocalStorage));
   }
   alert("Przepis zapisany do localSorage");
 }

 btnNewRecipe.addEventListener("click", function(event) {
   event.preventDefault();
   newRecipe.title = recipeName.value;
   newRecipe.description = recipeDescription.value;
   saveRecipeToLocalStorage(newRecipe);
   recipeName.value="";
   recipeDescription.value="";
   console.log("zapisano:", newRecipe);
 });

function renderAllRecipes() {
  let allRecipes = JSON.parse(localSorage.getItem("recipes"));
  let newList = document.querySelector(".row").cloneNode(true);

  allRecipes.forEach(function(singleRecipe) {
    newList.firstElementChild.nextElementSibling = singleRecipe.title;
    newList.lastElementChild = singleRecipe.description;
  });
  document.querySelector(".recipes_box_table_tbody").appendChild(newList);
}

btnNewRecipe.addEventListener("click", renderAllRecipes);


const one = document.querySelectorAll(".recipes_box_list");
console.log(one);



