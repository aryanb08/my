const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

// This makes the "No" button move when touched or hovered
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

function celebrate() {
    document.getElementById('question').style.display = 'none';
    document.querySelector('.buttons').style.display = 'none';
    document.getElementById('celebration').style.display = 'block';
}
