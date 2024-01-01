document.addEventListener('DOMContentLoaded', function () {
    // Establecer la fecha y hora de finalización del temporizador (ajusta esta fecha según tus necesidades)
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
            timerElement.innerHTML = '¡Feliz Año! ';

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

            // Insertar la etiqueta de audio (primer audio)
            const audioElement1 = document.createElement('audio');
            audioElement1.autoplay = true;
            audioElement1.loop = true;

            const audioSource1 = document.createElement('source');
            audioSource1.src = 'sounds/SoundArt.mp3';
            audioSource1.type = 'audio/mp3';

            audioElement1.appendChild(audioSource1);
            document.body.appendChild(audioElement1);

            // Insertar la etiqueta de audio (segundo audio)
            const audioElement2 = document.createElement('audio');
            audioElement2.loop = true;

            const audioSource2 = document.createElement('source');
            audioSource2.src = 'sounds/anonuevo.mp3';  // Reemplaza con la ruta de tu segundo archivo de audio
            audioSource2.type = 'audio/mp3';

            audioElement2.appendChild(audioSource2);
            document.body.appendChild(audioElement2);

            // Cambiar el contenido del elemento h1
            const yearDisplay = document.getElementById('yearDisplay');
            yearDisplay.innerHTML = '2024';

            // Actualizar el reloj cada segundo
            const clockInterval = setInterval(function () {
                const currentDateTime = new Date();
                const hours = currentDateTime.getHours();
                const minutes = currentDateTime.getMinutes();
                const seconds = currentDateTime.getSeconds();

                // Formatear la hora para asegurarse de que siempre tenga dos dígitos
                const formattedHours = hours < 10 ? `0${hours}` : hours;
                const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
                const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

                // Mostrar la hora en el elemento con id "clock"
                const clockElement = document.getElementById('clock');
                clockElement.innerHTML = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
            }, 1000);

            // Función para iniciar la reproducción de ambos audios al mismo tiempo
            window.playSecondAudio = function () {
                audioElement1.play();
                audioElement2.play();
                // Después de iniciar la reproducción, puedes ocultar o deshabilitar el botón si es necesario
                document.getElementById('playButton').style.display = 'none';
            };

            // Solicitar interacción del usuario antes de reproducir ambos audios
            document.body.addEventListener('click', playSecondAudio, { once: true });
        }
    }, 1000);
});
