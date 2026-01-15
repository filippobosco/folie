// DOM Elements
const form = document.getElementById('rsvp-form');
const nomeInput = document.getElementById('nome');
const cognomeInput = document.getElementById('cognome');
const emailInput = document.getElementById('email');
const telefonoInput = document.getElementById('telefono');
const submitButton = document.querySelector('.submit-button');
const buttonText = document.querySelector('.button-text');
const loadingSpinner = document.querySelector('.loading-spinner');
const successMessage = document.querySelector('.success-message');
const formContent = document.querySelector('.form-content');
const formContainer = document.querySelector('.form-container');

// Form State
let isSubmitting = false;

// Validation regex patterns
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
const nameRegex = /^[a-zA-Zàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ\s]{2,}$/;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeVideo();
    initializeForm();
    initializeAnimations();
    initializeCountdown();
});

// Video Background Initialization
function initializeVideo() {
    const video = document.getElementById('background-video');
    
    // Ensure video plays on mobile
    video.addEventListener('loadeddata', function() {
        video.play().catch(e => {
            console.log('Video autoplay prevented:', e);
        });
    });
    
    // Handle video loading errors
    video.addEventListener('error', function() {
        console.log('Video failed to load, using fallback');
        // Could add fallback image here
    });
}

// Form Initialization
function initializeForm() {
    form.addEventListener('submit', handleFormSubmit);
    
    // Add event listeners to all form inputs
    const allInputs = [nomeInput, cognomeInput, emailInput, telefonoInput];
    allInputs.forEach(input => {
        input.addEventListener('input', handleInputChange);
        input.addEventListener('blur', validateInput);
        input.addEventListener('focus', clearError);
    });
}

// Form Submission Handler
async function handleFormSubmit(e) {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    // Get form data
    const formData = {
        nome: nomeInput.value.trim(),
        cognome: cognomeInput.value.trim(),
        email: emailInput.value.trim(),
        telefono: telefonoInput.value.trim()
    };
    
    // Validate all fields
    const validation = validateAllFields(formData);
    if (!validation.isValid) {
        showError(validation.message);
        return;
    }
    
    // Set submitting state
    setSubmittingState(true);
    
    try {
        // Simulate API call (replace with actual endpoint)
        await submitRSVP(formData);
        
        // Show success
        showSuccess();
        
    } catch (error) {
        console.error('RSVP submission failed:', error);
        showError('Something went wrong. Please try again.');
        setSubmittingState(false);
    }
}

// Input Change Handler
function handleInputChange(e) {
    const input = e.target;
    const value = input.value.trim();
    
    // Clear error on typing
    if (value && input.classList.contains('error')) {
        clearError();
    }
    
    // Real-time validation feedback
    if (value) {
        const isValid = validateField(input.id, value);
        if (!isValid) {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    }
}

// Input Validation
function validateInput(e) {
    const input = e.target;
    const value = input.value.trim();
    
    if (value) {
        const isValid = validateField(input.id, value);
        if (!isValid) {
            showError(getFieldErrorMessage(input.id));
            return false;
        }
    }
    
    return true;
}

// Validate all fields
function validateAllFields(formData) {
    const { nome, cognome, email, telefono } = formData;
    
    if (!nome || !validateField('nome', nome)) {
        return { isValid: false, message: 'Please enter a valid first name' };
    }
    
    if (!cognome || !validateField('cognome', cognome)) {
        return { isValid: false, message: 'Please enter a valid last name' };
    }
    
    if (!email || !validateField('email', email)) {
        return { isValid: false, message: 'Please enter a valid email address' };
    }
    
    if (!telefono || !validateField('telefono', telefono)) {
        return { isValid: false, message: 'Please enter a valid phone number' };
    }
    
    return { isValid: true };
}

// Field validation
function validateField(fieldId, value) {
    switch (fieldId) {
        case 'nome':
        case 'cognome':
            return nameRegex.test(value);
        case 'email':
            return emailRegex.test(value);
        case 'telefono':
            return phoneRegex.test(value);
        default:
            return true;
    }
}

// Get field error message
function getFieldErrorMessage(fieldId) {
    switch (fieldId) {
        case 'nome':
            return 'Please enter a valid first name';
        case 'cognome':
            return 'Please enter a valid last name';
        case 'email':
            return 'Please enter a valid email address';
        case 'telefono':
            return 'Please enter a valid phone number';
        default:
            return 'Please enter a valid value';
    }
}

// Error Handling
function showError(message) {
    // Remove existing error
    clearError();
    
    // Add error class
    emailInput.classList.add('error');
    formContainer.classList.add('shake');
    
    // Create error message element
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    
    // Insert after input
    emailInput.parentNode.appendChild(errorElement);
    
    // Remove shake animation after it completes
    setTimeout(() => {
        formContainer.classList.remove('shake');
    }, 500);
}

function clearError() {
    emailInput.classList.remove('error');
    
    // Remove error message
    const errorMessage = emailInput.parentNode.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

// Submitting State
function setSubmittingState(submitting) {
    isSubmitting = submitting;
    
    if (submitting) {
        submitButton.disabled = true;
        buttonText.style.display = 'none';
        loadingSpinner.style.display = 'block';
    } else {
        submitButton.disabled = false;
        buttonText.style.display = 'block';
        loadingSpinner.style.display = 'none';
    }
}

// Success Handler
function showSuccess() {
    // Redirect to thank you page after a short delay
    setTimeout(() => {
        window.location.href = 'thank-you.html';
    }, 1500);
}

// API Submission to Google Sheets
async function submitRSVP(formData) {
    // Google Apps Script webhook URL
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx2kSXBZ1bkFuCea64pJsHsPagqjm1LaLdFPY1Abdxn97d9pihvlo9J83g9AXUTRLfDww/exec';
    
    try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        console.log('RSVP Data sent to Google Sheets:', formData);
        
        return {
            success: true,
            message: 'RSVP confirmed successfully'
        };
        
    } catch (error) {
        console.error('Error sending to Google Sheets:', error);
        throw new Error('Failed to submit RSVP. Please try again.');
    }
}

// Animations
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.hero-content > *');
    animatedElements.forEach(el => observer.observe(el));
}

// Header Button Functionality
document.querySelector('.header-button').addEventListener('click', function() {
    // Copy current URL to clipboard
    navigator.clipboard.writeText(window.location.href).then(() => {
        // Show temporary feedback
        const originalText = this.textContent;
        this.textContent = 'Link copied!';
        this.style.background = 'rgba(76, 175, 80, 0.2)';
        
        setTimeout(() => {
            this.textContent = originalText;
            this.style.background = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy URL:', err);
        // Fallback: show URL in alert
        alert('Share this link: ' + window.location.href);
    });
});

// Performance optimizations
function optimizePerformance() {
    // Lazy load video on mobile
    if (window.innerWidth <= 768) {
        const video = document.getElementById('background-video');
        video.preload = 'none';
        
        // Load video when user interacts
        document.addEventListener('touchstart', function() {
            video.load();
        }, { once: true });
    }
}

// Initialize performance optimizations
optimizePerformance();

// Handle window resize
window.addEventListener('resize', function() {
    // Re-optimize on resize
    optimizePerformance();
});

// Preload critical resources
function preloadResources() {
    // Preload fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Bebas+Neue&display=swap';
    fontLink.as = 'style';
    document.head.appendChild(fontLink);
}

// Initialize preloading
preloadResources();

// Countdown Timer
function initializeCountdown() {
    // Set target date: January 23, 2026 at 11 PM
    const targetDate = new Date('2026-01-23T23:00:00').getTime();
    
    // Update countdown every second
    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        // If countdown is finished
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('days').innerHTML = '00';
            document.getElementById('hours').innerHTML = '00';
            document.getElementById('minutes').innerHTML = '00';
            document.getElementById('seconds').innerHTML = '00';
            return;
        }
        
        // Calculate time units
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Update display
        document.getElementById('days').innerHTML = days.toString().padStart(2, '0');
        document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');
        
    }, 1000);
    
    // Initial call to avoid delay
    const now = new Date().getTime();
    const distance = targetDate - now;
    
    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').innerHTML = days.toString().padStart(2, '0');
        document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');
    }
}
