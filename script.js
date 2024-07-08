document.addEventListener('DOMContentLoaded', () => {
    const starField = document.getElementById('starfield');
    const numberOfStars = 100; // Puedes ajustar el número de estrellas

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        starField.appendChild(star);
    }
});
