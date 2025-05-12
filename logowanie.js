// JavaScript for login and registration pages

document.addEventListener('DOMContentLoaded', function() {
    // Login form handling
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const rememberMe = document.querySelector('input[name="remember"]').checked;
            
            // Simple validation
            if (!email || !password) {
                alert('Proszę wypełnić wszystkie pola.');
                return;
            }
            
            // Here you would normally send the data to a server
            // For demo purposes, we'll just show an alert
            console.log('Login attempt:', { email, password, rememberMe });
            alert('Zalogowano pomyślnie! Przekierowujemy na stronę główną...');
            
            // Redirect to home page after successful login
            // window.location.href = 'index.html';
        });
    }
    
    // Registration form handling
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const firstName = document.getElementById('first-name').value;
            const lastName = document.getElementById('last-name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const termsAccepted = document.querySelector('input[name="terms"]').checked;
            const newsletterSubscribed = document.querySelector('input[name="newsletter"]').checked;
            
            // Simple validation
            if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
                alert('Proszę wypełnić wszystkie wymagane pola.');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Hasła nie są identyczne.');
                return;
            }
            
            if (!termsAccepted) {
                alert('Musisz zaakceptować regulamin i politykę prywatności.');
                return;
            }
            
            // Here you would normally send the data to a server
            // For demo purposes, we'll just show an alert
            console.log('Registration attempt:', { 
                firstName, 
                lastName, 
                email, 
                phone, 
                password,
                newsletterSubscribed 
            });
            
            alert('Rejestracja zakończona pomyślnie! Przekierowujemy na stronę logowania...');
            
            // Redirect to login page after successful registration
            // window.location.href = 'logowanie.html';
        });
    }
    
    // Social login buttons
    const socialButtons = document.querySelectorAll('.social-button');
    socialButtons.forEach(button => {
        button.addEventListener('click', function() {
            const provider = this.classList.contains('google') ? 'Google' : 'Facebook';
            alert(`Logowanie przez ${provider} zostanie zaimplementowane wkrótce.`);
        });
    });
});