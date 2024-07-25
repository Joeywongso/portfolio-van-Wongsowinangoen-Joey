document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if(name && email && message) {
        alert('Formulier succesvol verzonden!');
    } else {
        alert('Vul alle velden in.');
    }
});

// Animation for form
document.getElementById('contact-form').addEventListener('focusin', function() {
    this.style.boxShadow = '0 0 10px #333';
});

document.getElementById('contact-form').addEventListener('focusout', function() {
    this.style.boxShadow = 'none';
});