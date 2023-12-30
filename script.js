var selectField = document.getElementById("selectField");
var arrowIcon = document.getElementById("arrowIcon");
var options = document.getElementsByClassName("options");

selectField.onclick = function () {
  // Toggle the 'active' class to show/hide options
  this.classList.toggle("active");

  // Toggle the rotate class on the arrow icon
  arrowIcon.classList.toggle("rotate");

  // Toggle the display of options
  var list = document.getElementById("list");
  list.style.display =
    list.style.display === "none" || list.style.display === ""
      ? "block"
      : "none";
};

for (var i = 0; i < options.length; i++) {
  options[i].onclick = function () {
    // Set the selected text to the clicked option
    selectField.getElementsByTagName("p")[0].innerHTML =
      this.getElementsByTagName("p")[0].innerHTML;

    // Hide the options after selection
    selectField.classList.remove("active");
    arrowIcon.classList.remove("rotate");
    document.getElementById("list").style.display = "none";
  };
}
