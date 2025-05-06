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
  nextBtn.addEventListener("click", nextSlide)
  prevBtn.addEventListener("click", prevSlide)

  // Initialize slider
  updateSlider()
})
