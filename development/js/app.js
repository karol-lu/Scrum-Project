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

