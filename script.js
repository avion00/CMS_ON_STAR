
const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");

// Show/hide options on button click
selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);

// Update selected option and hide options on option click
options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;

    optionMenu.classList.remove("active");
  });
});

// Hide options when clicking outside the field
document.addEventListener("click", (e) => {
  const isClickInside =
    optionMenu.contains(e.target) || selectBtn.contains(e.target);

  if (!isClickInside) {
    optionMenu.classList.remove("active");
  }
});

