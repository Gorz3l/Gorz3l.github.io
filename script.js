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
document.addEventListener("DOMContentLoaded", function() {
  // Mobile dropdown toggle
  const dropdownBtn = document.querySelector('.dropbtn')
  const dropdownContent = document.querySelector('.dropdown-content')
  
  if (dropdownBtn && dropdownContent) {
    // For mobile devices, toggle dropdown on click
    if (window.innerWidth < 768) {
      dropdownBtn.addEventListener('click', function(e) {
        e.preventDefault()
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block'
      })
    }
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Animation for reason boxes on scroll
  const reasonBoxes = document.querySelectorAll('.reason-box, .value-box, .team-member');
  
  function checkScroll() {
    reasonBoxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (boxTop < windowHeight * 0.8) {
        box.style.opacity = '1';
        box.style.transform = 'translateY(0)';
      }
    });
  }
  
  // Set initial state for animation
  if (reasonBoxes.length > 0) {
    reasonBoxes.forEach(box => {
      box.style.opacity = '0';
      box.style.transform = 'translateY(20px)';
      box.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Check on scroll and initial load
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on page load
  }
});