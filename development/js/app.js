
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



// NameStorage

const entryBtn = document.querySelector(".entry_btn");
const userName = document.querySelector(".app_name");
const entrySection = document.querySelector(".entry");
const main = document.querySelector(".main-2");

function saveUser() {
  localStorage.setItem("user",userName.innerText);
}

function addUser(event) {
  event.preventDefault();
  const entryInput = document.querySelector(".entry_input");

  if (entryInput.value.length >= 3 ) {
    userName.innerText = entryInput.value;
    saveUser();
    entrySection.classList.add('hide');
    main.classList.remove('hide');
  }
}

entryBtn.addEventListener('click', addUser);

if (localStorage.getItem("user") != null) {
  let newUser = localStorage.getItem("user");
  userName.innerText = newUser;
  entrySection.classList.add('hide');
  main.classList.remove('hide');
}

// show actual week

currentDate = new Date();
startDate = new Date(currentDate.getFullYear(), 0, 1);
const days = Math.floor((currentDate - startDate) /
    (24 * 60 * 60 * 1000));

const weekNumber = Math.ceil(days / 7);

const weekCounter = document.querySelector('.week-counter');
weekCounter.innerText = weekNumber;



