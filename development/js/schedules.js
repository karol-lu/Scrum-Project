//Check Name
const userName = document.querySelector(".app_name");
const checkName = () => {
    if (localStorage.getItem("user") != null) {
        userName.innerText = localStorage.user;
    }
};
checkName();

//Action button
const newScheduleBtnSave = document.querySelector('.new_plan_btn');
const newScheduleSection = document.querySelector('.new_plan');
const schedulesSection = document.querySelector('.schedules_box');

const addButton = document.querySelector('.action-icon-add');

newScheduleBtnSave.addEventListener('click', () => {
    newScheduleSection.classList.add('hide');
    schedulesSection.classList.remove('hide');
});

addButton.addEventListener('click', () => {
    schedulesSection.classList.add('hide');
    newScheduleSection.classList.remove('hide');
});


// NEW SCHEDULE
//
// SCHEDULE input
const scheduleName = document.querySelector("#plan_name");
const scheduleDescription = document.querySelector("#plan_description");
const scheduleWeek = document.querySelector("#plan_day");


const newSchedule = {
    ID: "",
    title:"",
    description:"",
    weekNumber: "",
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
};


function saveScheduleToLocalStorage(newObject) {
    let dataLocalStorage = [];

    if (localStorage.getItem("schedules") !== null) {
        dataLocalStorage = JSON.parse(localStorage.getItem("schedules"));
        dataLocalStorage.push(newObject);
        localStorage.setItem('schedules', JSON.stringify(dataLocalStorage));

    } else {
        dataLocalStorage.push(newObject);
        localStorage.setItem("schedules", JSON.stringify(dataLocalStorage));
    }
}

newScheduleBtnSave.addEventListener("click", event => {
    event.preventDefault();

    newSchedule.title = scheduleName.value;
    newSchedule.description = scheduleDescription.value;
    newSchedule.weekNumber = scheduleWeek.value;

    saveScheduleToLocalStorage(newSchedule);
    scheduleName.value="";
    scheduleDescription.value="";
    scheduleWeek.value="";
    console.log("zapisano:", newSchedule);
});

//read recipe from local storage and add to recipes list

const createNewSchedule = () => {


    const valueID = document.querySelector('.schedules_box_table_tbody').lastElementChild;
    const nextID = () => Number(valueID.firstElementChild.innerText) + 1;

    const newRow = document.createElement('tr');
    const newID = document.createElement('td');
    const newName = document.createElement('td');
    const newDescription = document.createElement('td');
    const newWeekNumber = document.createElement('td');
    const node = document.querySelector('tbody .row').lastElementChild;
    const newAction = node.cloneNode(true);

    newID.innerText = nextID();

    const schedulesArray = JSON.parse(localStorage.getItem("schedules"));
    newName.innerText = schedulesArray[schedulesArray.length - 1].title;
    newDescription.innerText = schedulesArray[schedulesArray.length - 1].description;
    newWeekNumber.innerText = schedulesArray[schedulesArray.length - 1].weekNumber;

    newID.classList.add('td_text');
    newName.classList.add('td_text');
    newDescription.classList.add('td_text');
    newWeekNumber.classList.add('td_text');
    newRow.classList.add('row');


    newRow.appendChild(newID);
    newRow.appendChild(newName);
    newRow.appendChild(newDescription);
    newRow.appendChild(newWeekNumber);
    newRow.appendChild(newAction);

    document.querySelector('tbody').appendChild(newRow);

}

const showHideSchedules = () => {
    newScheduleSection.classList.add('hide');
    schedulesSection.classList.remove('hide');
};

newScheduleBtnSave.addEventListener('click', () => {
    showHideSchedules();
    createNewSchedule();
});

// edit plans
function editPlans() {
    const editButton = document.querySelectorAll(
        ".schedules_box .action-icon-edit"
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

editPlans();
