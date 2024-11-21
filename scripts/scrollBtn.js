// Check if the browser supports addEventListener, otherwise, use attachEvent for older browsers (e.g., IE 8 and below)  
if (window.addEventListener) {  
    window.addEventListener('scroll', throttle(handleScroll));  
} else if (window.attachEvent) {  
    window.attachEvent('onscroll', throttle(handleScroll));  
}  
  
// Function to throttle the execution of the scroll handler  
function throttle(func, limit = 100) {  
    let lastFunc;  
    let lastRan;  
  
    return function () {  
        const context = this;  
        const args = arguments;  
  
        if (!lastRan) {  
            func.apply(context, args);  
            lastRan = Date.now();  
        } else {  
            clearTimeout(lastFunc);  
            lastFunc = setTimeout(function () {  
                if ((Date.now() - lastRan) >= limit) {  
                    func.apply(context, args);  
                    lastRan = Date.now();  
                }  
            }, limit - (Date.now() - lastRan));  
        }  
    };  
}  
  
// Function that handles the scroll event logic  
function handleScroll() {  
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');  
    const scrollToHiBtn = document.getElementById('scrollToHiBtn');  
  
    const scrollHeight = window.scrollY || (document.documentElement.scrollTop || document.body.scrollTop);  
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;  
    const documentHeight = document.documentElement.scrollHeight || document.body.scrollHeight;  
    const distanceFromBottom = documentHeight - (scrollHeight + windowHeight);  
  
    // Show buttons if scrolled down more than 400 pixels  
    if (scrollHeight > 400) {  
        if (!hasClass(scrollToTopBtn, 'show')) {  
            addClass(scrollToTopBtn, 'show');  
        }  
        if (!hasClass(scrollToHiBtn, 'show')) {  
            addClass(scrollToHiBtn, 'show');  
        }  
    } else {  
        // Hide buttons when scrolled back up  
        if (hasClass(scrollToTopBtn, 'show')) {  
            removeClass(scrollToTopBtn, 'show');  
        }  
        if (hasClass(scrollToHiBtn, 'show')) {  
            removeClass(scrollToHiBtn, 'show');  
        }  
    }  
  
    // Hide buttons when near the bottom of the page (distance ≤ 100 pixels)  
    if (distanceFromBottom <= 100) {  
        if (hasClass(scrollToTopBtn, 'show')) {  
            removeClass(scrollToTopBtn, 'show');  
            addClass(scrollToTopBtn, 'hide');  
        }  
        if (hasClass(scrollToHiBtn, 'show')) {  
            removeClass(scrollToHiBtn, 'show');  
            addClass(scrollToHiBtn, 'hide');  
        }  
    } else {  
        // Show buttons again when scrolling up  
        if (hasClass(scrollToTopBtn, 'hide')) {  
            removeClass(scrollToTopBtn, 'hide');  
            addClass(scrollToTopBtn, 'show');  
        }  
        if (hasClass(scrollToHiBtn, 'hide')) {  
            removeClass(scrollToHiBtn, 'hide');  
            addClass(scrollToHiBtn, 'show');  
        }  
    }  
}  
  
// Utility function to add a class to an element with cross-browser compatibility  
function addClass(element, className) {  
    if (element && element.classList) {  
        element.classList.add(className);  
    } else if (element && !hasClass(element, className)) {  
        element.className += ' ' + className;  
    }  
}  
  
// Utility function to remove a class from an element with cross-browser compatibility  
function removeClass(element, className) {  
    if (element && element.classList) {  
        element.classList.remove(className);  
    } else if (element) {  
        element.className = element.className.split(' ').filter(c => c !== className).join(' ');  
    }  
}  
  
// Utility function to check if an element has a specific class  
function hasClass(element, className) {  
    if (element && element.classList) {  
        return element.classList.contains(className);  
    } else if (element) {  
        return element.className.split(' ').indexOf(className) > -1;  
    }  
    return false;  
}  
  
// Add click event listeners for the buttons  
document.getElementById('scrollToTopBtn').addEventListener('click', function() {  
    window.scrollTo({ top: 0, behavior: 'smooth' });  
});  
  
document.getElementById('scrollToHiBtn').addEventListener('click', function() {  
    const hiSection = document.getElementById('el3');  
    if (hiSection) {  
        hiSection.scrollIntoView({ behavior: 'smooth' });  
    }  
});  
