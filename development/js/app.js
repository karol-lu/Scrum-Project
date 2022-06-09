
// widgets

function widgets() {
  let numberOfPlans = 0;
  let numberOfRecipes = 0;

  if (localStorage.getItem("recipes") !== null) {
    let dataFromLocalStorage = [];
    dataFromLocalStorage = JSON.parse(localStorage.getItem("recipes"));

    if (dataFromLocalStorage.length > 0) {
      numberOfRecipes = dataFromLocalStorage.length;
    }
  }

  const closingButtons = document.querySelectorAll(".widget-x");
  closingButtons.forEach(function (element) {
    element.addEventListener("click", function () {
      this.closest(".widget-box").remove();
    });
  });
  if (numberOfRecipes > 0) {
    document.querySelector(
      ".widget-text-one"
    ).textContent = `Masz juz ${numberOfRecipes} przepisow, niezle!`;
  } else {
    document.querySelector(
      ".widget-text-one"
    ).textContent = `Pamietaj, aby dodac przepis!`;
  }

  if (numberOfPlans > 0) {
    document.querySelector(
      ".widget-text-two"
    ).textContent = `Masz juz ${numberOfPlans} planow!`;
  } else {
    document.querySelector(
      ".widget-text-two"
    ).textContent = `Pamietaj, aby dodac plan!`;
  }
}

widgets();

// button action

// const addButton = document.querySelector('.action-icon-add');
// const editButton = document.querySelectorAll('.action-icon-edit');
// const deleteButton = document.querySelectorAll('.action-icon-trash');
// const schedulesSection = document.querySelector('.schedules_box');
// const recipesSection = document.querySelector('.recipes_box');


// addButton.addEventListener('click', (event) => {
//     if (event.target.parentNode.classList.contains('recipes_box_title')){
//         recipesSection.classList.add('hide');
//         newRecipeSection.classList.remove('hide');
//     }else if (event.target.parentNode.classList.contains('schedules_box_title')) {
//         schedulesSection.classList.add('hide');
//         newScheduleSection.classList.remove('hide');
//     }
//   });







// previousButton.addEventListener('click', () => {
// //
// })



// NameStorage

const entryBtn = document.querySelector(".entry_btn");
const userName = document.querySelector(".app_name");
const entrySection = document.querySelector(".entry");

function saveUser() {
  localStorage.setItem("user",userName.innerText);
}

function addUser(event) {
  event.preventDefault();
  const entryInput = document.querySelector(".entry_input");

  if (entryInput.value.length >= 3 ) {
    userName.innerText = entryInput.value;
    saveUser();
  }
}

entryBtn.addEventListener('click', addUser);

if (localStorage.getItem("user") != null) {
  let newUser = localStorage.getItem("user");
  userName.innerText = newUser;
  entrySection.style.display = "none"; 
  document.querySelector(".main-2").classList.remove("hide");
  
  console.log(localStorage);
}

