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
  }, {rootMargin: "0px 0px 0px 0px"} // sets trigger point
  
  );
  
  const hiddenElements = document.querySelectorAll('.fade-Y-bottom-l');
  hiddenElements.forEach((el) => observer1.observe(el));


  // When pressed updates to right email
$('a.mail').on('click', function () {
  var href = $(this).attr('href');
  $(this).attr('href', href.replace('ruitenberg', 'thomasruitenberg'));
});