
  // ~ MENU MOBILE

let menuBtn = document.getElementById("menuBtn")
let navLinks = document.getElementById("navLinks")

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show")
  })
}

  //~~  DROPDOWN + DEEP DROPDOWN

let dropdownBtn = document.getElementById("dropdownBtn")
let dropdownMenu = document.getElementById("dropdownMenu")
let deepBtn = document.getElementById("deepBtn") 
let deepMenu = document.getElementById("deepMenu")

if (dropdownBtn && dropdownMenu) {
  dropdownBtn.addEventListener("click", (e) => {
    e.preventDefault()
    dropdownMenu.classList.toggle("show")

    if (!dropdownMenu.classList.contains("show") && deepMenu) {
      deepMenu.classList.remove("show")
    }
  })
}

if (deepBtn && deepMenu) {
  deepBtn.addEventListener("click", (e) => {
    e.preventDefault()
    deepMenu.classList.toggle("show")
  })
}

document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    if (dropdownMenu) dropdownMenu.classList.remove("show")
    if (deepMenu) deepMenu.classList.remove("show")
  }
})

let bookings = JSON.parse(localStorage.getItem("bookings")) || []

let modal = document.getElementById("modal")
let closeBtn = document.querySelector(".close")
let form = document.querySelector(".modal-form")


let openButtons = document.querySelectorAll(".btn-book")

openButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex"
  })
})

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
  })
}

function isOverlapping(newBooking) {
  return bookings.some(
    booking =>
      booking.date === newBooking.date && booking.time === newBooking.time
  )
}

// submit form
if (form) {
  let dateInput = form.querySelector('input[type="date"]')
  let timeInput = form.querySelector('input[type="time"]')
  let peopleInput = form.querySelector('input[type="number"]')

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("FORM SUBMITTED")

    let date = dateInput.value
    let time = timeInput.value
    let people = peopleInput.value

    if (!date || !time || !people) {
      alert(" Fill all required fields")
      return
    }

    let newBooking = { date, time }

    if (isOverlapping(newBooking)) {
      alert(" This time is already booked")
      return
    }

    bookings.push(newBooking)
    localStorage.setItem("bookings", JSON.stringify(bookings))

    console.log("Bookings:", bookings)

    alert(" Booking successful")
    form.reset()
    modal.style.display = "none"
  })
}
//~~ about-bottum
localStorage.getItem("bookings")
let counters = document.querySelectorAll(".counter")

counters.forEach(counter => {
  let target = +counter.dataset.target
  let count = 0

  let interval = setInterval(() => {
    count++
    counter.textContent = count

    if (count === target) {
      clearInterval(interval)
    }
  }, 20)
})













// let menuBtn = document.getElementById("menuBtn")
// let navLinks = document.getElementById("navLinks")

// menuBtn.addEventListener("click", () => {
//   navLinks.classList.toggle("show")
// })

// let dropdownBtn = document.getElementById("dropdownBtn")
// let dropdownMenu = document.getElementById("dropdownMenu")

// let deepBtn = document.getElementById("deepBtn")
// let deepMenu = document.getElementById("deepMenu")

// dropdownBtn.addEventListener("click", function (e) {
//   e.preventDefault()

//   dropdownMenu.classList.toggle("show")

//   if (!dropdownMenu.classList.contains("show")) {
//     deepMenu.classList.remove("show")
//   }
// })

// deepBtn.addEventListener("click", function (e) {
//   e.preventDefault()
//   deepMenu.classList.toggle("show")
// });

// document.addEventListener("click", function (e) {
//   if (!e.target.closest(".dropdown")) {
//     dropdownMenu.classList.remove("show")
//     deepMenu.classList.remove("show")
//   }
// })
// // ~~ BOOKING MODAL
//  let bookings = JSON.parse(localStorage.getItem("bookings")) || []

// let modal = document.getElementById("modal")
// let openBtn = document.getElementById("openModal")
// let closeBtn = document.querySelector(".close")
// let form = document.querySelector(".modal-form")

// let dateInput = form.querySelector('input[type="date"]')
// let timeInput = form.querySelector('input[type="time"]')
// let peopleInput = form.querySelector('input[type="number"]')

// openBtn.addEventListener("click", () => {
//   modal.style.display = "flex"
// })

// closeBtn.addEventListener("click", () => {
//   modal.style.display = "none"
// })

// function isOverlapping(newBooking) {
//   for (let booking of bookings) {
//     if (
//       booking.date === newBooking.date &&
//       booking.time === newBooking.time
//     ) {
//       return true
//     }
//   }
//   return false
// }

// form.addEventListener("submit", function (e) {
//   e.preventDefault()

//   let date = dateInput.value
//   let time = timeInput.value
//   let people = peopleInput.value

//   if (!date || !time || !people) {
//     alert(" Fill all required fields")
//     return
//   }

//   let newBooking = { date, time }

//   if (isOverlapping(newBooking)) {
//     alert(" This time is already booked")
//     return
//   }

//   bookings.push(newBooking)
//   localStorage.setItem("bookings", JSON.stringify(bookings))

//   alert(" Booking successful")

//   form.reset()
//   modal.style.display = "none"
// })
 
