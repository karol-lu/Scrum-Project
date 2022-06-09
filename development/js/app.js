// button action

const addButton = document.querySelector('.action-icon-add');
const editButton = document.querySelectorAll('.action-icon-edit');
const deleteButton = document.querySelectorAll('.action-icon-trash');
const schedulesSection = document.querySelector('.schedules_box');
const recipesSection = document.querySelector('.recipes_box');


addButton.addEventListener('click', (event) => {
    if (event.target.parentNode.classList.contains('recipes_box_title')){
        recipesSection.classList.add('hide');
        newRecipeSection.classList.remove('hide');
    }else if (event.target.parentNode.classList.contains('schedules_box_title')) {
        schedulesSection.classList.add('hide');
        newScheduleSection.classList.remove('hide');
    }
  });







// previousButton.addEventListener('click', () => {
// //
// })

