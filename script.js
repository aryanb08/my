function celebrate() {
    // Hide the question and buttons
    document.getElementById('question').style.display = 'none';
    document.querySelector('.buttons').style.display = 'none';
    
    // Show the celebration message
    document.getElementById('celebration').style.display = 'block';

    // Start the heart shower
    setInterval(createHeart, 300);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️'; // You can change this to 💖 or 💕
    
    // Randomize position and speed
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    document.body.appendChild(heart);

    // Remove heart after it falls to keep the page fast
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

