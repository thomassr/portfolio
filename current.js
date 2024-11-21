console.log("script.js file linked.");

// Function for button scroll specific point 'check out my work'
function scrollFunction1() {
  let e = document.getElementById("el1");
  e.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
    inline: 'start'
  });
}

// Function for button scroll specific point 'learn more about me'
function scrollFunction2() {
  let e = document.getElementById("el2");
  // This ends the block to the window 
  // bottom and also aligns the view to the center 
  e.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
    inline: 'start'
  });
}

// Function for button scroll specific point 'or say hoi'
function scrollFunction3() {
  let e = document.getElementById("el3");
  // This ends the block to the window 
  // bottom and also aligns the view to the center 
  e.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
    inline: 'start'
  });
}

// Check if the browser supports addEventListener, otherwise, use attachEvent for older browsers (e.g., IE 8 and below)
if (window.addEventListener) {
  window.addEventListener('scroll', handleScroll);
} else if (window.attachEvent) {
  window.attachEvent('onscroll', handleScroll);
}

// Function that handles the scroll event logic
function handleScroll() {
  // Select the elements for the "scroll to top" and "scroll to hi" buttons
  // Fallback to getElementById if querySelector is not supported in older browsers
  var scrollToTopBtn = document.querySelector('.scrollToTopBtn') || document.getElementById('scrollToTopBtn');
  var scrollToHiBtn = document.querySelector('.scrollToHiBtn') || document.getElementById('scrollToHiBtn');
  
  // Determine the current scroll position using scrollY or fall back to cross-browser alternatives
  var scrollHeight = window.scrollY !== undefined 
      ? window.scrollY 
      : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  
  // Get the height of the visible window; fallback values ensure compatibility with older browsers
  var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  
  // Calculate the total document height; fallbacks handle older browsers
  var documentHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  
  // Calculate the distance from the bottom of the page
  var distanceFromBottom = documentHeight - (scrollHeight + windowHeight);

  // Show or hide the buttons based on the current scroll position
  if (scrollHeight > 400) { 
    // If scrolled more than 400 pixels, add the 'show' class to make buttons visible
    addClass(scrollToTopBtn, 'show');
    if (scrollToHiBtn) {
      addClass(scrollToHiBtn, 'show'); // Only add if the element exists
    }
  } else {
    // If scrolled less than 400 pixels, remove the 'show' class to hide buttons
    removeClass(scrollToTopBtn, 'show');
    if (scrollToHiBtn) {
      removeClass(scrollToHiBtn, 'show'); // Only remove if the element exists
    }
  }

  // Hide buttons when near the bottom of the page (distance ≤ 100 pixels)
  if (distanceFromBottom <= 100) {
    addClass(scrollToTopBtn, 'hide');
    if (scrollToHiBtn) {
      addClass(scrollToHiBtn, 'hide'); // Only add if the element exists
    }
  } else {
    // Remove 'hide' class if not near the bottom
    removeClass(scrollToTopBtn, 'hide');
    if (scrollToHiBtn) {
      removeClass(scrollToHiBtn, 'hide'); // Only remove if the element exists
    }
  }
}

// Utility function to add a class to an element with cross-browser compatibility
function addClass(element, className) {
  if (element.classList) {
    element.classList.add(className); // Modern method for adding classes
  } else if (!hasClass(element, className)) {
    element.className += ' ' + className; // Fallback for older browsers that don't support classList
  }
}

// Utility function to remove a class from an element with cross-browser compatibility
function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className); // Modern method for removing classes
  } else {
    // Regular expression replaces the className with an empty space in older browsers
    element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
}

// Utility function to check if an element has a specific class, compatible with older browsers
function hasClass(element, className) {
  if (element.classList) {
    return element.classList.contains(className); // Modern method to check for a class
  } else {
    // Regular expression tests whether the element's className contains the specified class
    return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Try to select the .scrollToTopBtn element
  const scrollToTopBtn = document.querySelector('.scrollToTopBtn');

  // Check if the element exists before adding the event listener
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', scrollToTop);
  } else {
    console.warn('.scrollToTopBtn not found. Event listener not added.');
  }
});

// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
}

// Function to trigger animations when in view
const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show-anim');
    } else {
      entry.target.classList.remove('show-anim');
      {threshold: 1.0}
    } 
  }); 
}, {rootMargin: "0px 0px -200px 0px"} // sets trigger point

);

const hiddenElements = document.querySelectorAll('.fade-Y-bottom-l,.fade-Y-bottom-s,.scale-up');
hiddenElements.forEach((el) => observer1.observe(el));

const gradients = ['gradient-1', 'gradient-2', 'gradient-3', 'gradient-4', 'gradient-5'];  
  
function changeBackground() {  
    const backgroundLayers = document.querySelectorAll('.background-layer');  
    const randomIndex = Math.floor(Math.random() * gradients.length);  
  
    // Verwijder 'active' class van alle lagen en voeg nieuwe gradient classes toe  
    backgroundLayers.forEach((layer, index) => {  
        layer.classList.remove('active'); // Verwijder de 'active' class van alle lagen  
        const gradientClass = gradients[(randomIndex + index) % gradients.length]; // Bepaal de gradient class  
        layer.classList.add(gradientClass); // Voeg de gradient class toe  
    });  
  
    // Voeg 'active' class toe aan de eerste achtergrondlaag  
    if (backgroundLayers.length > 0) {  
        backgroundLayers[0].classList.add('active');  
    }  
}  
  
// Initialiseer de achtergrond  
changeBackground();  
  
// Stel de Intersection Observer in  
const options = {  
    root: null,  
    rootMargin: '0px',  
    threshold: 1  
};  
  
const observer = new IntersectionObserver((entries) => {  
    entries.forEach(entry => {  
        if (entry.isIntersecting) {  
            const activeLayer = document.querySelector('.background-layer.active');  
            const backgroundLayers = document.querySelectorAll('.background-layer');  
  
            // Bepaal de index van de huidige actieve laag  
            const currentIndex = Array.from(backgroundLayers).indexOf(activeLayer);  
            // Bepaal de index van de volgende laag (0 of 1)  
            const nextIndex = (currentIndex + 1) % backgroundLayers.length;  
  
            // Zorg ervoor dat we de gradient updaten voor de volgende laag  
            const nextLayer = backgroundLayers[nextIndex];  
            const currentGradient = [...nextLayer.classList].find(cls => gradients.includes(cls));  
            const currentGradientIndex = gradients.indexOf(currentGradient);  
            const nextGradientIndex = (currentGradientIndex + 1) % gradients.length; // Volgende gradient  
            const nextGradient = gradients[nextGradientIndex];  
  
            // Verander de gradient class  
            nextLayer.classList.remove(currentGradient);  
            nextLayer.classList.add(nextGradient);  
            activeLayer.classList.remove('active'); // Verwijder 'active' van de huidige laag  
            nextLayer.classList.add('active'); // Maak de volgende laag actief  
        }  
    });  
}, options);  
  
// Observeer de achtergrond overgangselement  
const backgroundTransition = document.querySelector('.background-wrapper');  
if (backgroundTransition) {  
    observer.observe(backgroundTransition);  
} else {  
    console.warn('.background-wrapper not found. Intersection Observer will not be set up.');  
}  


// When pressed updates to right email
document.querySelectorAll('a.mail').forEach(function(link) {  
  link.href = link.href.replace('ruitenberg', 'thomasruitenberg');  
}); 