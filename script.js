const noBtn = document.getElementById('noBtn');

// The runaway button logic
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Also make it move for touch (mobile users)
noBtn.addEventListener('touchstart', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

function celebrate() {
    // Switch the screens
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('celebration').style.display = 'block';

    // Start scattering the hearts
    setInterval(createHeart, 300);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️'; 
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}
