document.addEventListener('DOMContentLoaded', function () {
    // Establecer la fecha y hora de finalización del temporizador (puedes ajustar esta fecha según tus necesidades)
    const countdownDate = new Date('December 31, 2023 23:59:59').getTime();

    // Actualizar el temporizador cada segundo
    const countdownInterval = setInterval(function () {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        // Calcular días, horas, minutos y segundos restantes
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Mostrar el temporizador en el elemento con id "timer"
        const timerElement = document.getElementById('timer');
        timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // Comprobar si el temporizador ha llegado a cero
        if (distance < 0) {
            clearInterval(countdownInterval);
            timerElement.innerHTML = '¡Feliz Año 2024!';
        
            // Insertar el código HTML adicional con las clases "firework"
            const fireworksContainer = document.createElement('div');
            fireworksContainer.classList.add('firework-container');

            for (let i = 0; i < 6; i++) {
                const firework = document.createElement('div');
                firework.classList.add('firework');
                fireworksContainer.appendChild(firework);
            }
            // Agregar el contenedor de fuegos artificiales al cuerpo del documento
            document.body.appendChild(fireworksContainer);


            // Insertar la etiqueta de audio
            const audioElement = document.createElement('audio');
            audioElement.autoplay = true;
            audioElement.loop = true;

            const audioSource = document.createElement('source');
            audioSource.src = 'sounds/SoundArt.mp3';
            audioSource.type = 'audio/mp3';

            audioElement.appendChild(audioSource);
            document.body.appendChild(audioElement);
        }
    }, 1000);
});
