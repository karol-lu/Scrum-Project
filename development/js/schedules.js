const newScheduleBtnSave = document.querySelector('.new_plan_btn');
const newScheduleSection = document.querySelector('.new_plan');

newScheduleBtnSave.addEventListener('click', () => {
    newScheduleSection.classList.add('hide');
    schedulesSection.classList.remove('hide');
});