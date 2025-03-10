// Create stars with enhanced sparkling
function createStars() {
    const starsContainer = document.getElementById('stars');
    const numberOfStars = 300;
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = Math.floor(Math.random() * window.innerHeight);
        
        // Random size - increased max size
        const size = Math.random() * 3 + 0.5;
        
        // Random duration - shorter for more active twinkling
        const duration = 2 + Math.random() * 5;
        
        // Random delay
        const delay = Math.random() * 10;
        
        // Random brightness
        const brightness = 0.5 + Math.random() * 0.5;
        
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDuration = `${duration}s`;
        star.style.animationDelay = `${delay}s`;
        star.style.backgroundColor = `rgba(255, 255, 255, ${brightness})`;
        
        // Randomly add a special sparkling class to some stars
        if (Math.random() > 0.7) {
            star.classList.add('sparkle');
        }
        
        starsContainer.appendChild(star);
    }
}

// Handle window resize - adjust stars
function handleResize() {
    const starsContainer = document.getElementById('stars');
    starsContainer.innerHTML = ''; // Clear existing stars
    createStars(); // Recreate stars for new window size
}

// Add event listeners
window.addEventListener('load', createStars);
window.addEventListener('resize', handleResize);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});