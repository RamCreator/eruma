// JavaScript for Friendship Valentine Surprise

document.addEventListener('DOMContentLoaded', () => {
    console.log('Surprise page loaded! 💖');

    // Add heart particles on click for a premium feel
    document.addEventListener('click', (e) => {
        createHeart(e.pageX, e.pageY);
    });
});

function createHeart(x, y) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.fontSize = Math.random() * (30 - 15) + 15 + 'px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '9999';
    heart.style.animation = 'floatUp 1.5s ease-out forwards';
    
    // Add animation style if not exists
    if (!document.getElementById('heart-animation')) {
        const style = document.createElement('style');
        style.id = 'heart-animation';
        style.innerHTML = `
            @keyframes floatUp {
                0% { transform: translateY(0) scale(1); opacity: 1; }
                100% { transform: translateY(-100px) scale(1.5); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1500);
}
