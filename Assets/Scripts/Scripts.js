//FUNCION DE RELOJ

function updateClock() {
    const now = new Date();

    // Obtener la hora
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Obtener la fecha
    const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const dayOfWeek = daysOfWeek[now.getDay()];
    const day = now.getDate().toString().padStart(2, '0');
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    // Preparo las variables a "imprimir"
    const message = `Recuerda, hoy es:`;
    const dateString = `${dayOfWeek}, ${day} de ${month} de ${year}`;
    const timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById('clock').innerHTML = `${message}<br>${dateString}<br>${timeString}`;
}

// Actualiza el reloj y la fecha inmediatamente y luego cada segundo
updateClock();
setInterval(updateClock, 1000);

// FUNCIÓN DE SEGURIDAD

// Función para escapar caracteres especiales
function escapeHTML(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// Manejar el envío del formulario
document.getElementById('safeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que se recargue la página

    // Obtener y escapar el contenido del textarea
    let userInput = document.getElementById('userInput').value;
    let safeInput = escapeHTML(userInput);

    // Mostrar el contenido seguro en la página
    document.getElementById('output').textContent = safeInput;
});
