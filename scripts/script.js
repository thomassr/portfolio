console.log("script.js file linked.");

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

// Event listeners for buttons  
document.getElementById('navigate-work-hero').addEventListener('click', () => scrollToSection('el1'));  
document.getElementById('navigate-work-footer').addEventListener('click', () => scrollToSection('el1'));  
document.getElementById('navigate-bio').addEventListener('click', () => scrollToSection('el2'));  
document.getElementById('navigate-contact').addEventListener('click', () => scrollToSection('el3'));  


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