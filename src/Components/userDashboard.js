
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
