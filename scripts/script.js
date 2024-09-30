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

// When pressed updates to right email
$('a.mail').on('click', function () {
  var href = $(this).attr('href');
  $(this).attr('href', href.replace('ruitenberg', 'thomasruitenberg'));
});


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

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


document.querySelector('.scrollToTopBtn').addEventListener('click', scrollToTop);

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

const gradients = [
  'gradient-1',
  'gradient-2',
  'gradient-3',
  'gradient-4',
  'gradient-5'
];

function changeBackground() {
  const backgroundLayers = document.querySelectorAll('.background-layer');

  // Select a random gradient index
  const randomIndex = Math.floor(Math.random() * gradients.length);

  // Apply the gradient classes to background layers only
  backgroundLayers.forEach((layer, index) => {
    const gradientClass = gradients[(randomIndex + index) % gradients.length];
    layer.classList.add(gradientClass);
    layer.classList.remove('active'); // Remove 'active' class from all layers
  });

  // Add 'active' class to the first background layer
  const firstBackgroundLayer = document.querySelector('.background-layer');
  if (firstBackgroundLayer) {
    firstBackgroundLayer.classList.add('active');
  }
}

// Call the function initially to set the initial background
changeBackground();

// Set up the Intersection Observer
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1 
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const activeLayer = document.querySelector('.background-layer.active');
      const nextLayer = activeLayer ? activeLayer.nextElementSibling : null;

      if (activeLayer) {
        activeLayer.classList.remove('active');

        const nextActiveLayer = nextLayer && nextLayer.classList.contains('background-layer')
          ? nextLayer
          : document.querySelector('.background-layer');

        if (nextActiveLayer) {
          const currentGradient = nextActiveLayer.classList[1];
          const currentIndex = gradients.indexOf(currentGradient);
          const nextIndex = (currentIndex + 2) % gradients.length;
          const nextGradient = gradients[nextIndex];

          nextActiveLayer.classList.remove(currentGradient);
          nextActiveLayer.classList.add(nextGradient);
          nextActiveLayer.classList.add('active');
        }
      }
    }
  });
}, options);

// Observe the background transition element only if it exists
const backgroundTransition = document.querySelector('.background-wrapper');
if (backgroundTransition) {
  observer.observe(backgroundTransition);
} else {
  console.warn('No .background-wrapper element found. Intersection Observer will not be set up.');
}


