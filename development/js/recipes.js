//Check NAME
const userName = document.querySelector(".app_name");
const checkName = () => {
    if (localStorage.getItem("user") != null) {
        userName.innerText = localStorage.user;
    }
};
checkName();
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
  title: "",
  description: "",
  instructions: [],
  ingredients: [],
};

function renderInstruction(instruction) {
    let newLi = document.querySelector(".recipe_instructions_list_item").cloneNode(true);

    newLi.firstElementChild.innerText = instruction;
    newInstructionList.appendChild(newLi);
}

btnInstruction.addEventListener("click", (event) => {
  event.preventDefault();

  newRecipe.instructions.push(recipeInstructions.value);
  renderInstruction(recipeInstructions.value);
  recipeInstructions.value = "";
});

function renderIngredients(ingredient) {
    let newLi = document.querySelector(".recipe_ingredients_list_item").cloneNode(true);

    newLi.firstElementChild.innerText = ingredient;
    newIngredientsList.appendChild(newLi);
}

btnIngredients.addEventListener("click", (event) => {
  event.preventDefault();

  newRecipe.ingredients.push(recipeIngredients.value);
  renderIngredients(recipeIngredients.value);
  recipeIngredients.value = "";
});


function saveRecipeToLocalStorage(newObject) {
  let dataFromLocalStorage = [];

    if (localStorage.getItem("recipes") !== null) {
        dataFromLocalStorage = JSON.parse(localStorage.getItem("recipes"));
        dataFromLocalStorage.push(newObject);
        localStorage.setItem('recipes', JSON.stringify(dataFromLocalStorage));

    } else {
        dataFromLocalStorage.push(newObject);
        localStorage.setItem("recipes", JSON.stringify(dataFromLocalStorage));
    }
}

btnNewRecipe.addEventListener("click", event => {
    event.preventDefault();

    newRecipe.title = recipeName.value;
    newRecipe.description = recipeDescription.value;

  saveRecipeToLocalStorage(newRecipe);
  recipeName.value = "";
  recipeDescription.value = "";
  console.log("zapisano:", newRecipe);
});
//Add new recipe button action
const recipesSection = document.querySelector('.recipes_box');
const newRecipeSection = document.querySelector('.new_recipes');
const addButton = document.querySelector('.action-icon-add');

addButton.addEventListener('click', () => {
        recipesSection.classList.add('hide');
        newRecipeSection.classList.remove('hide');
});

//read recipe from local storage and add to recipes list
const newRecipeBtnSave = document.querySelector('.recipe_save');

const showHideRecipes = () => {
    newRecipeSection.classList.add('hide');
    recipesSection.classList.remove('hide');
};

const createNewRow = () => {


    const valueID = document.querySelector('.recipes_box_table_tbody').lastElementChild;
    console.log(valueID);
    const nextID = () => Number(valueID.firstElementChild.innerText) + 1;
    console.log(nextID());

    const newRow = document.createElement('tr');
    const newID = document.createElement('td');
    const newName = document.createElement('td');
    const newDescription = document.createElement('td');
    const node = document.querySelector('tbody .row').lastElementChild;
    const newAction = node.cloneNode(true);

    newID.innerText = nextID();

    const recipesArray = JSON.parse(localStorage.getItem("recipes"));
    newName.innerText = recipesArray[recipesArray.length - 1].title;
    newDescription.innerText = recipesArray[recipesArray.length - 1].description;

    newID.classList.add('td_text');
    newName.classList.add('td_text');
    newDescription.classList.add('td_text');
    newRow.classList.add('row');


    newRow.appendChild(newID);
    newRow.appendChild(newName);
    newRow.appendChild(newDescription);
    newRow.appendChild(newAction);

    document.querySelector('tbody').appendChild(newRow);

}

newRecipeBtnSave.addEventListener('click', () => {
    showHideRecipes();
    createNewRow();
});

// edit recipes

function editRecipe() {
  const editButton = document.querySelectorAll(
    ".recipes_box .action-icon-edit"
  );
  editButton.forEach(function (element) {
    element.addEventListener("click", function () {
      this.classList.toggle("active");

      let description = this.closest(".row").querySelector(
        ".td_text:nth-of-type(3)"
      ).textContent;
      let textArea = `<textarea name="edit" rows="4" cols="50">
     ${description}
      </textarea>`;
      this.closest(".row").querySelector(".td_text:nth-of-type(3)").innerHTML =
        textArea;
      if (this.classList.contains("active")) {
        let updatedDescription =
          this.closest(".row").querySelector(".td_text textarea").value;
        this.closest(".row").querySelector(
          ".td_text:nth-of-type(3)"
        ).innerHTML = updatedDescription;
      }
    });
  });
}

editRecipe();


// recipe edit

const editLine = document.querySelectorAll(".editLine");

editLine.forEach(icon => {
    icon.addEventListener('click', e => {
        e.preventDefault();

        e.currentTarget.previousElementSibling.setAttribute('contenteditable', 'true');
        e.currentTarget.previousElementSibling.innerText = e.currentTarget.value;
        newRecipe.instructions.push(e.currentTarget.previousElementSibling.innerText);
        saveRecipeToLocalStorage(newRecipe);
    });
});


//  remove line

const removeLine = document.querySelectorAll(".removeLine");

removeLine.forEach(icon => {
    icon.addEventListener('click', e => {
        e.preventDefault();

        e.currentTarget.parentElement.remove();
        localStorage.clear();
    });
});