console.log("script.js file linked.");

document.addEventListener('DOMContentLoaded', function () {  
  // Check if the current page is the root (index.html)  
  if (window.location.pathname === '/' || window.location.pathname === '/index.html') {  
      const workHeroButton = document.getElementById('navigate-work-hero');  
      const workFooterButton = document.getElementById('navigate-work-footer');  
      const bioButton = document.getElementById('navigate-bio');  
      const contactButton = document.getElementById('navigate-contact');  

      // Only add event listeners if the elements exist  
      if (workHeroButton) {  
          workHeroButton.addEventListener('click', () => scrollToSection('el1'));  
      }  
      if (workFooterButton) {  
          workFooterButton.addEventListener('click', () => scrollToSection('el1'));  
      }  
      if (bioButton) {  
          bioButton.addEventListener('click', () => scrollToSection('el2'));  
      }  
      if (contactButton) {  
          contactButton.addEventListener('click', () => scrollToSection('el3'));  
      }  
  }  
});  

// Select all buttons with the class 'btn'  
const buttons = document.querySelectorAll('.btn');  
  
// Add a click event listener to each button  
buttons.forEach(button => {  
    button.addEventListener('click', function() {  
        // Add the 'active' class to provide visual feedback  
        this.classList.add('active');  
  
        // Remove the 'active' class after a short delay  
        setTimeout(() => {  
            this.classList.remove('active');  
            this.blur(); // Remove focus from the button  
        }, 200); // Adjust the duration as needed (200ms in this example)  
    });  
});  

// Function to scroll to the selected section  
function scrollToSection(sectionId) {  
  const section = document.getElementById(sectionId);  
  section.scrollIntoView({ behavior: 'smooth' });  
}  

// Function to scroll to the selected section  
function scrollToSection(sectionId) {  
  const section = document.getElementById(sectionId);  
  section.scrollIntoView({ behavior: 'smooth' });  
}  

// Function to trigger animations when in view
const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show-anim');
    } else {
      entry.target.classList.remove('show-anim');
    }
  });
}, {
  rootMargin: "20px 0px -20% 0px"
  
});

const hiddenElements = document.querySelectorAll('.fade-Y-bottom-l,.fade-Y-bottom-s,.scale-up');
hiddenElements.forEach((el) => observer1.observe(el));

document.addEventListener('DOMContentLoaded', function () {  

const gradients = ['gradient-1', 'gradient-2', 'gradient-3', 'gradient-4', 'gradient-5'];  
const backgroundLayers = document.querySelectorAll('.background-layer');  
  
// Function to change background gradients  
function changeBackground() {  
    const randomIndex = Math.floor(Math.random() * gradients.length);  
  
    // Use a single pass to set classes  
    backgroundLayers.forEach((layer, index) => {  
        layer.classList.remove('active'); // Remove 'active' class  
        const gradientClass = gradients[(randomIndex + index) % gradients.length];  
        layer.classList.add(gradientClass); // Add new gradient class  
    });  
  
    // Set 'active' class on the first layer  
    if (backgroundLayers.length > 0) {  
        backgroundLayers[0].classList.add('active');  
    }  
}  
  
// Initialize the background  
changeBackground();  
  
// Debounce function  
function debounce(func, wait) {  
    let timeout;  
    return function executedFunction(...args) {  
        const later = () => {  
            timeout = null;  
            func(...args);  
        };  
        clearTimeout(timeout);  
        timeout = setTimeout(later, wait);  
    };  
}  
  
// Set up Intersection Observer  
const options = {  
    root: null,  
    rootMargin: '0px',  
    threshold: 1  
};  
  
let hasLogged = false; // Flag to limit logging  
  
// Define the intersection observer callback  
const intersectionCallback = (entries) => {  
    entries.forEach(entry => {  
        if (entry.isIntersecting) {  
            // Log only once per element  
            if (!hasLogged) {  
                console.log(entry); // Log the entry  
                hasLogged = true; // Prevent further logs  
            }  
  
            const activeLayer = document.querySelector('.background-layer.active');  
            if (!activeLayer) return; // Early exit if no active layer found  
  
            const currentIndex = [...backgroundLayers].indexOf(activeLayer);  
            const nextIndex = (currentIndex + 1) % backgroundLayers.length;  
            const nextLayer = backgroundLayers[nextIndex];  
  
            // Find current gradient class and determine next gradient  
            const currentGradient = [...nextLayer.classList].find(cls => gradients.includes(cls));  
            const currentGradientIndex = gradients.indexOf(currentGradient);  
            const nextGradientIndex = (currentGradientIndex + 1) % gradients.length;  
            const nextGradient = gradients[nextGradientIndex];  
  
            // Update classes efficiently  
            nextLayer.classList.remove(currentGradient);  
            nextLayer.classList.add(nextGradient);  
            activeLayer.classList.remove('active');  
            nextLayer.classList.add('active');  
        }  
    });  
};  
  
// Create a debounced version of the intersection callback  
const debouncedIntersectionCallback = debounce(intersectionCallback, 100); // Adjust wait time as needed  
  
const observer = new IntersectionObserver(debouncedIntersectionCallback, options);  
  
// Observe the background transition element  
const backgroundTransition = document.querySelector('.background-wrapper');  
if (backgroundTransition) {  
    observer.observe(backgroundTransition);  
} else {  
    console.warn('.background-wrapper not found. Intersection Observer will not be set up.');  
}  
}); 


// When pressed updates to right email
document.querySelectorAll('a.mail').forEach(function(link) {  
  link.href = link.href.replace('ruitenberg', 'thomasruitenberg');  
}); 