document.addEventListener("DOMContentLoaded", function () {
  const customDropdown = document.querySelector(".custom-dropdown");
  const selectedOption = customDropdown.querySelector(".selected-option");
  const optionsList = customDropdown.querySelector(".options");

  selectedOption.addEventListener("click", function () {
    optionsList.style.display =
      optionsList.style.display === "block" ? "none" : "block";
      if (optionsList.style.display === "block"){
          // optionsList.style.
      }
  });

  optionsList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      selectedOption.textContent = event.target.textContent;
      optionsList.style.display = "none";
    }
  });

  document.addEventListener("click", function (event) {
    if (!customDropdown.contains(event.target)) {
      optionsList.style.display = "none";
    }
  });
});
