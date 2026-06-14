document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Actualizar el año del footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Interacción para los botones de los juegos
    // Seleccionamos TODOS los botones que tengan la clase .btn-game
    const gameButtons = document.querySelectorAll('.btn-game');
    
    gameButtons.forEach(button => {
        button.addEventListener('click', (evento) => {
            // Encuentra el título del juego al que pertenece el botón
            const gameTitle = evento.target.closest('.game-card').querySelector('h2').innerText;
            console.log(`Iniciando la descarga del juego: ${gameTitle}`);
        });
    });

    // 3. Interacción para los botones de los informes
    const reportButtons = document.querySelectorAll('.btn-report');
    
    reportButtons.forEach(button => {
        button.addEventListener('click', (evento) => {
            const gameTitle = evento.target.closest('.game-card').querySelector('h2').innerText;
            console.log(`Abriendo el informe técnico/GDD de: ${gameTitle}`);
        });
    });
});