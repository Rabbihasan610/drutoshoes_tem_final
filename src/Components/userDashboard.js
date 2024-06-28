// document
// .getElementById("manage-account-btn")
// .addEventListener("click", function () {
//   const menu = document.getElementById("manage-account-menu");
//   menu.classList.toggle("hidden");
// });

// function showContent(section, element) {

// const sections = document.querySelectorAll(".content-section");
// sections.forEach(function (section) {
//   section.classList.add("hidden");
// });

// const menuItems = document.querySelectorAll(
//   "#menu-list li, #manage-account-menu li"
// );
// menuItems.forEach(function (item) {
//   item.classList.remove("active");
// });

// const selectedSection = document.getElementById(section);
// if (selectedSection) {
//   selectedSection.classList.remove("hidden");
// }

// element.classList.add("active");
// }

// document.getElementById("default-content").classList.remove("hidden");

function showContent(id, element) {
  const contents = document.querySelectorAll(".content-section");
  contents.forEach((content) => {
    content.classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");

  const menuItems = document.querySelectorAll("#menu-list li");
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
  if (element) {
    element.classList.add("active");
  }

  // Close the drawer
  const drawerCheckbox = document.getElementById("my-drawer-2");
  if (drawerCheckbox.checked) {
    drawerCheckbox.checked = false;
  }
}

document.getElementById("manage-account-btn").addEventListener("click", () => {
  document.getElementById("manage-account-menu").classList.toggle("hidden");
});
