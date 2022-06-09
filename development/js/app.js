// widgets

function widgets() {
  const numberOfPlans = 0;
  const numberOfRecipes = 99;
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
