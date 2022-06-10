
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



