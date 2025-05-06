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




// HISZPANIA
document.addEventListener("DOMContentLoaded", function() {
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
  
  // Hotel availability check buttons
  const checkButtons = document.querySelectorAll('.check-btn');
  checkButtons.forEach(button => {
    button.addEventListener('click', function() {
      const hotelName = this.closest('.hotel-card').querySelector('h3').textContent;
      alert(`Sprawdzanie dostępności dla hotelu: ${hotelName}\nW przygotowaniu - funkcja będzie dostępna wkrótce!`);
    });
  });
  
  // Destination reservation buttons
  const reserveButtons = document.querySelectorAll('.reserve-btn');
  reserveButtons.forEach(button => {
    button.addEventListener('click', function() {
      const destinationName = this.closest('.destination-card').querySelector('h3').textContent;
      alert(`Sprawdzanie terminów dla wycieczki: ${destinationName}\nW przygotowaniu - funkcja będzie dostępna wkrótce!`);
    });
  });
  
  // CTA button
  const ctaButton = document.querySelector('.cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('click', function() {
      window.location.href = 'rezerwacja.html';
    });
  }
  
  // Animation for reason cards on scroll
  const reasonCards = document.querySelectorAll('.reason-card');
  
  function checkScroll() {
    reasonCards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (cardTop < windowHeight * 0.8) {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }
    });
  }
  
  // Set initial state for animation
  reasonCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  // Check on scroll and initial load
  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Check on page load
});