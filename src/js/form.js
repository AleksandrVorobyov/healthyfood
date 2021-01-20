const subsInput = document.getElementById('subscribe-email-input');
const subsbtn = document.getElementById('subscribe-email-btn');

subsbtn.addEventListener('click', function(e) {
    if (subsInput.value == '') {
        e.preventDefault();
        alert('Enter a valid email adress');
    }
});