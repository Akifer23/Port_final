const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_hula69t';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        alert('mensaje enviado con ecito :)!');
        document.getElementById('form').reset(); // Limpiar el formulario
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  });

let form = document.getElementById('container');
let idleTime = 0;
const idleInterval = 1000; // 1 segundo

function resetIdleTime() {
    idleTime = 0;
}

function checkIdleTime() {
    idleTime += 1;
    if (idleTime > 60) { // Cambia el valor según la cantidad de segundos que deseas para la inactividad
        form.classList.add('flip');
        setTimeout(() => {
            form.classList.remove('flip');
        }, 3000); // Ajusta el tiempo de la animación de vuelta (3 segundos en este ejemplo)
        resetIdleTime();
    }
}

document.addEventListener('mousemove', resetIdleTime);
document.addEventListener('keypress', resetIdleTime);

setInterval(checkIdleTime, idleInterval);