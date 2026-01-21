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
  e.preventDefault()
  deepMenu.classList.toggle("show")
});

document.addEventListener("click", function (e) {
  if (!e.target.closest(".dropdown")) {
    dropdownMenu.classList.remove("show")
    deepMenu.classList.remove("show")
  }
})
// ~~ BOOKING MODAL
let bookings = []
let modal = document.getElementById("modal")
let openBtn = document.getElementById("openModal")
let closeBtn = document.querySelector(".close") 
let form = document.querySelector(".modal-form")

let dateInput = form.querySelector('input[type="date"]')
let timeInput = form.querySelector('input[type="time"]')
let peopleInput = form.querySelector('input[type="number"]')
openBtn.addEventListener("click", () => {
  modal.style.display = "flex"
})

closeBtn.addEventListener("click", () => {
  modal.style.display = "none"
})
function isOverlapping(newBooking) {
  for (let booking of bookings) {
    if (booking.date === newBooking.date && newBooking.time === booking.time) {
      return true
    }
  }
  return false
}
form.addEventListener("submit", function (e) {
  e.preventDefault()

  let date = dateInput.value
  let time = timeInput.value
  let people = peopleInput.value

  if (!date || !time || !people) {
    alert(" Fill all required fields")
    return
  }

  let newBooking = {
    date: date,
    time: time
  }

  if (isOverlapping(newBooking)) {
    alert(" This time is already booked")
    return
  }

  bookings.push(newBooking)

  alert(" Booking successful")

  form.reset()
  modal.style.display = "none"
})


