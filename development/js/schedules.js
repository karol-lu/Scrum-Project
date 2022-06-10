const newScheduleBtnSave = document.querySelector(".new_plan_btn");
const newScheduleSection = document.querySelector(".new_plan");

newScheduleBtnSave.addEventListener("click", () => {
  newScheduleSection.classList.add("hide");
  schedulesSection.classList.remove("hide");
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
