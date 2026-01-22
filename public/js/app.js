
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
// & carouselodal
let containers = document.querySelectorAll(".carousel-container");

    containers.forEach(container => {

        let carousel = container.querySelector(".carousel")
        let slides = container.querySelectorAll(".slide")
        let index = 0

        let indicatorsGrp = document.createElement("div")
        indicatorsGrp.className = "indicators-grp"
        container.appendChild(indicatorsGrp)

        slides.forEach((slide, i) => {
            let indicator = document.createElement("div")
            indicator.className = "indicator"
            if (i === 0) indicator.classList.add("activeIndicator")
            indicatorsGrp.appendChild(indicator)

            indicator.addEventListener("click", () => {
                goToSlide(i)
            })
        })

        let indicators = indicatorsGrp.querySelectorAll(".indicator")

        function goToSlide(i) {
            carousel.style.transform = `translateX(-${i * 100}%)`

            indicators.forEach(ind => ind.classList.remove("activeIndicator"))
            indicators[i].classList.add("activeIndicator")

            index = i
        }
        setInterval(() => {
            index++;
            if (index >= slides.length) index = 0
            goToSlide(index)
        }, 3000)
    })
// & modal logec carousel
let images = document.querySelectorAll(".carousel-img");
let modals = document.getElementById("carouselModal");
let modalImg = document.getElementById("carouselImage");
let closeBtns = document.querySelector(".close");
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});


closeBtns.onclick = () => modal.style.display = "none";

nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % images.length;
  modalImg.src = images[currentIndex].src;
};


prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentIndex].src;
};

modals.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};












