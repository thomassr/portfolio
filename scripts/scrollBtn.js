window.addEventListener('scroll', function() {
    const stickyBtns = document.getElementById('sticky-btns');
    if (stickyBtns) {
        const scrollPosition = window.scrollY;
        const bottomPosition = document.documentElement.scrollHeight - window.innerHeight;

        console.log('Scroll Position:', scrollPosition); // Debugging line
        console.log('Bottom Position:', bottomPosition); // Debugging line
        console.log('Condition:', scrollPosition > 300 && scrollPosition < bottomPosition - 100); // Debugging line

        if (scrollPosition > 300 && scrollPosition < bottomPosition - 100) {
            stickyBtns.style.visibility = 'visible'; // Set visibility to visible
            stickyBtns.style.opacity = '1'; // Set opacity to 1
            stickyBtns.style.transform = 'translateY(0)'; // Move to original position
            console.log('Show class added'); // Debugging line
        } else {
            stickyBtns.style.opacity = '0'; // Set opacity to 0
            stickyBtns.style.transform = 'translateY(20px)'; // Move slightly below
            setTimeout(() => {
                if (stickyBtns.style.opacity === '0') {
                    stickyBtns.style.visibility = 'hidden'; // Hide after transition
                }
            }, 600); // Match the transition duration
            console.log('Show class removed'); // Debugging line
        }
    } else {
        console.error('Element with id "sticky-btns" not found');
    }
});

document.getElementById('to-top-btn').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

