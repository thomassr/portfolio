
//Sets viewport right for mobile
// Get viewport height and multiple it by 1% = a vh unit
let vh = window.innerHeight * 0.01;
// Set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// Listen to the resize event
window.addEventListener('resize', () => {
    // Execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });


// Navbar transparent
  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });


// Scroll to top button
var target = document.getElementById("target");

var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
var rootElement = document.documentElement

// Create a function that will be called when element is intersected
function callback(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      // Show button
      scrollToTopBtn.classList.add("showBtn")
    } else {
      // Hide button
      scrollToTopBtn.classList.remove("showBtn")
    }
  });
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

scrollToTopBtn.addEventListener("click", scrollToTop);
let observer = new IntersectionObserver(callback);
observer.observe(target);


// Function to trigger animations when in view
const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
      {threshold: 1.0}
    } 
  }); 
}, {rootMargin: "0px 0px -200px 0px"} // sets trigger point

);

const hiddenElements = document.querySelectorAll('.fade-X-left,.fade-X-right,.fade-Y-bottom,.slide-X-left,.slide-X-right,.hero-slide-X-top,.hero-slide-X-bottom');
hiddenElements.forEach((el) => observer1.observe(el));


$('a.mail').on('click', function(){
  var href = $(this).attr('href');
  $(this).attr('href', href.replace('ruitenberg', 'thomasruitenberg'));
});




