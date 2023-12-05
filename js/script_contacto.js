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
        document.getElementById('form').reset(); 
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  });

let form = document.getElementById('container');
let idleTime = 0;
const idleInterval = 1000; 

function resetIdleTime() {
    idleTime = 0;
}

function checkIdleTime() {
    idleTime += 1;
    if (idleTime > 60) { 
        form.classList.add('flip');
        setTimeout(() => {
            form.classList.remove('flip');
        }, 3000); 
        resetIdleTime();
    }
}

document.addEventListener('mousemove', resetIdleTime);
document.addEventListener('keypress', resetIdleTime);

setInterval(checkIdleTime, idleInterval);
