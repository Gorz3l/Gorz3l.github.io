// Reviews slider functionality
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".reviews-slider")
  const prevBtn = document.querySelector(".prev-btn")
  const nextBtn = document.querySelector(".next-btn")
  const reviewCards = document.querySelectorAll(".review-card")

  let currentIndex = 0
  const totalReviews = reviewCards.length

  // Function to move to the next review
  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalReviews
    updateSlider()
  }

  // Function to move to the previous review
  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalReviews) % totalReviews
    updateSlider()
  }

  // Function to update the slider position
  function updateSlider() {
    // Calculate the percentage to move based on the current index
    const slideWidth = 100 / totalReviews
    const translateValue = -currentIndex * slideWidth

    slider.style.transform = `translateX(${translateValue}%)`
  }

  // Event listeners for buttons
  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", nextSlide)
    prevBtn.addEventListener("click", prevSlide)

    // Initialize slider
    updateSlider()
  }
})

// Dropdown menu functionality
document.addEventListener("DOMContentLoaded", () => {
  // Mobile dropdown toggle
  const dropdownBtn = document.querySelector(".dropbtn")
  const dropdownContent = document.querySelector(".dropdown-content")

  if (dropdownBtn && dropdownContent) {
    // For mobile devices, toggle dropdown on click
    if (window.innerWidth < 768) {
      dropdownBtn.addEventListener("click", (e) => {
        e.preventDefault()
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block"
      })
    }
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        })
      }
    })
  })

  // Animation for reason boxes on scroll
  const reasonBoxes = document.querySelectorAll(".reason-box, .value-box, .team-member")

  function checkScroll() {
    reasonBoxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (boxTop < windowHeight * 0.8) {
        box.style.opacity = "1"
        box.style.transform = "translateY(0)"
      }
    })
  }

  // Set initial state for animation
  if (reasonBoxes.length > 0) {
    reasonBoxes.forEach((box) => {
      box.style.opacity = "0"
      box.style.transform = "translateY(20px)"
      box.style.transition = "opacity 0.5s ease, transform 0.5s ease"
    })

    // Check on scroll and initial load
    window.addEventListener("scroll", checkScroll)
    checkScroll() // Check on page load
  }
})

// Kod dla strony rezerwacji
document.addEventListener("DOMContentLoaded", () => {
  // Elementy DOM
  const peopleSlider = document.getElementById("people-count")
  const peopleValue = document.getElementById("people-value")
  const priceSlider = document.getElementById("price-max")
  const priceValue = document.getElementById("price-value")
  const searchButton = document.getElementById("search-button")
  const tripsContainer = document.getElementById("trips-container")
  const noResults = document.getElementById("no-results")
  const resultsNumber = document.getElementById("results-number")
  const tripCards = document.querySelectorAll(".trip-card")

  // Aktualizacja wartości suwaka liczby osób
  if (peopleSlider && peopleValue) {
    peopleSlider.addEventListener("input", function () {
      peopleValue.textContent = this.value
    })
  }

  // Aktualizacja wartości suwaka ceny
  if (priceSlider && priceValue) {
    priceSlider.addEventListener("input", function () {
      priceValue.textContent = this.value
    })
  }

  // Funkcja filtrowania wycieczek
  function filterTrips() {
    if (!searchButton || !tripsContainer || !noResults || !resultsNumber) return

    // Pobierz wartości filtrów
    const selectedDuration = document.querySelector('input[name="duration"]:checked')?.value || "all"
    const maxPrice = Number.parseInt(priceSlider.value)
    const selectedCountries = Array.from(document.querySelectorAll('input[name="country"]:checked')).map(
      (checkbox) => checkbox.value,
    )

    let visibleCount = 0

    // Filtruj wycieczki
    tripCards.forEach((card) => {
      const country = card.dataset.country
      const duration = Number.parseInt(card.dataset.duration)
      const price = Number.parseInt(card.dataset.price)

      // Sprawdź czy wycieczka spełnia kryteria
      const durationMatch =
        selectedDuration === "all" ||
        (selectedDuration === "4" && duration <= 4) ||
        (selectedDuration === "5" && duration <= 5) ||
        (selectedDuration === "6" && duration <= 6) ||
        duration == selectedDuration

      const priceMatch = price <= maxPrice
      const countryMatch = selectedCountries.length === 0 || selectedCountries.includes(country)

      // Pokaż lub ukryj kartę
      if (durationMatch && priceMatch && countryMatch) {
        card.style.display = "block"
        visibleCount++
      } else {
        card.style.display = "none"
      }
    })

    // Aktualizuj licznik wyników
    resultsNumber.textContent = visibleCount

    // Pokaż komunikat o braku wyników jeśli potrzeba
    if (visibleCount === 0) {
      noResults.style.display = "block"
    } else {
      noResults.style.display = "none"
    }
  }

  // Nasłuchuj kliknięcia przycisku wyszukiwania
  if (searchButton) {
    searchButton.addEventListener("click", filterTrips)
  }

  // Inicjalizacja strony
  if (tripCards.length > 0) {
    resultsNumber.textContent = tripCards.length
  }

  // Obsługa przycisków rezerwacji
  const reserveButtons = document.querySelectorAll(".reserve-btn")
  reserveButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const tripName = this.closest(".trip-details").querySelector("h3").textContent
      alert(`Rezerwacja wycieczki: ${tripName} została rozpoczęta. Proszę się zalogować, aby kontynuować.`)
    })
  })

  // Ustaw minimalną datę na dzisiejszą
  const startDateInput = document.getElementById("start-date")
  if (startDateInput) {
    const today = new Date()
    const summerStart = new Date(today.getFullYear(), 5, 1) // 1 czerwca
    const summerEnd = new Date(today.getFullYear(), 7, 31) // 31 sierpnia

    // Formatuj datę do formatu YYYY-MM-DD
    const formatDate = (date) => {
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, "0")
      const day = String(date.getDate()).padStart(2, "0")
      return `${year}-${month}-${day}`
    }

    startDateInput.min = formatDate(summerStart)
    startDateInput.max = formatDate(summerEnd)
    startDateInput.value = formatDate(summerStart)
  }
})
