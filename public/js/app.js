let menuBtn = document.getElementById("menuBtn")
let navLinks = document.getElementById("navLinks")

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show")
})

let dropdownBtn = document.getElementById("dropdownBtn")
let dropdownMenu = document.getElementById("dropdownMenu")

let deepBtn = document.getElementById("deepBtn")
let deepMenu = document.getElementById("deepMenu")

dropdownBtn.addEventListener("click", function (e) {
  e.preventDefault()

  dropdownMenu.classList.toggle("show")

  if (!dropdownMenu.classList.contains("show")) {
    deepMenu.classList.remove("show")
  }
})

deepBtn.addEventListener("click", function (e) {
  e.preventDefault();

  deepMenu.classList.toggle("show");
});

document.addEventListener("click", function (e) {
  if (!e.target.closest(".dropdown")) {
    dropdownMenu.classList.remove("show");
    deepMenu.classList.remove("show");
  }
})
