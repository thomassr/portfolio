console.log("script1.js file linked");

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

window.addEventListener('scroll', function() {
  var scrollToTopBtn = document.querySelector('.scrollToTopBtn');
  var scrollToHiBtn = document.querySelector('.scrollToHiBtn');
  var scrollHeight = window.pageYOffset;
  var windowHeight = window.innerHeight;
  var documentHeight = document.documentElement.scrollHeight;
  var distanceFromBottom = documentHeight - (scrollHeight + windowHeight);

  if (scrollHeight > 400) {
    scrollToTopBtn.classList.add('show');
    scrollToHiBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
    scrollToHiBtn.classList.remove('show');
  }



  if (distanceFromBottom <= 100) {
    scrollToTopBtn.classList.add('hide');
    scrollToHiBtn.classList.add('hide');
  } else {
    scrollToTopBtn.classList.remove('hide');
    scrollToHiBtn.classList.remove('hide');
  }
});

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

// Observe the background transition element
const backgroundTransition = document.querySelector('.background-wrapper');
observer.observe(backgroundTransition);

