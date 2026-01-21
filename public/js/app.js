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
// ~~ BOOKING MODAL
let bookBtn = document.querySelector(".btnNav"); // Book a Table button
let bookingModal = document.getElementById("bookingModal");
let closeBooking = document.getElementById("closeBooking");
let bookingForm = document.getElementById("bookingForm");
let bookingMessage = document.getElementById("bookingMessage");
let bookings = [];

bookBtn.addEventListener("click", () => {
  bookingModal.style.display = "flex";
});

closeBooking.addEventListener("click", () => {
  bookingModal.style.display = "none";
});

bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("fullName").value;
  let meal = document.getElementById("meal").value;
  let start = document.getElementById("startTime").value;
  let end = document.getElementById("endTime").value;
  let people = document.getElementById("people").value;


  function timeToMinutes(t) {
    let [h, m] = t.split(":");
    return parseInt(h) * 60 + parseInt(m);
  }

  let startMin = timeToMinutes(start);
  let endMin = timeToMinutes(end);


  let conflict = bookings.some(b => {
    if (b.meal !== meal) return false;
    let bStart = timeToMinutes(b.start);
    let bEnd = timeToMinutes(b.end);
    return (startMin < bEnd && endMin > bStart);
  });

  if (conflict) {
    bookingMessage.textContent = "Time slot already booked!";
    bookingMessage.style.color = "red";
  } else {
    bookings.push({name, meal, start, end, people});
    bookingMessage.textContent = "Booking confirmed!";
    bookingMessage.style.color = "green";
    bookingForm.reset();
  }
});

