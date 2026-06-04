const dropdownButton = document.getElementById("myButton");
const dropdownMenu = document.getElementById("myDropdown");

function toggleDropdown(event) {
  event.stopPropagation();
  dropdownMenu.classList.toggle("dropdown__menu--show");
}

function closeDropdown(event) {
  if (
    !dropdownMenu.contains(event.target) &&
    !dropdownButton.contains(event.target)
  ) {
    dropdownMenu.classList.remove("dropdown__menu--show");
  }
}

dropdownButton.addEventListener("click", toggleDropdown);
document.addEventListener("click", closeDropdown);
