// Create stars with reduced brightness and twinkling
function createStars() {
    const starsContainer = document.getElementById('stars');
    const numberOfStars = 200; // Reduced from 300
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = Math.floor(Math.random() * window.innerHeight);
        
        // Random size - decreased max size
        const size = Math.random() * 2 + 0.5; // Reduced max size from 3 to 2
        
        // Longer duration for less active twinkling
        const duration = 4 + Math.random() * 6; // Increased from 2-7s to 4-10s
        
        // Random delay
        const delay = Math.random() * 10;
        
        // Reduced brightness
        const brightness = 0.3 + Math.random() * 0.4; // Reduced from 0.5-1.0 to 0.3-0.7
        
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDuration = `${duration}s`;
        star.style.animationDelay = `${delay}s`;
        star.style.backgroundColor = `rgba(255, 255, 255, ${brightness})`;
        
        // Reduce number of sparkling stars
        if (Math.random() > 0.9) { // Changed from 0.7 to 0.9 (fewer sparkling stars)
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