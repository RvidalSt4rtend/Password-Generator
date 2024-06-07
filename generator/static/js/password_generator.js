function generatePassword() {
    const length = document.getElementById('length').value;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeSpecial = document.getElementById('include-special').checked;

    fetch(`/generate-password?length=${length}&numbers=${includeNumbers ? 'on' : 'off'}&special=${includeSpecial ? 'on' : 'off'}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('password-display').textContent = data.password;
            document.getElementById('copy-message').textContent = 'Password not Copied'; // Restaurar el mensaje
            document.getElementById('copy-message-container').classList.remove('copied'); // Eliminar la clase 'copied'
        });

document.getElementById('generate-button').addEventListener('click', generatePassword);
document.getElementById('length').addEventListener('input', (event) => {
    document.getElementById('length-value').textContent = event.target.value;
});
}


window.addEventListener('load', () => {
    document.getElementById('include-numbers').checked = true;
    generatePassword();
});

document.getElementById('copy-button').addEventListener('click', () => {
    const password = document.getElementById('password-display').value;
    navigator.clipboard.writeText(password)
        .then(() => {
            document.getElementById('copy-message').textContent = 'Password Copied';
            document.getElementById('copy-message-container').classList.add('copied'); 
        })
        .catch(error => {
            console.error('Error al copiar la contraseña: ', error);
        });
});


// Función para ajustar dinámicamente la altura del div
function ajustarAlturaDiv() {
    const div = document.getElementById('password-display');
    div.style.height = 'auto'; // Restablecer la altura a 'auto' para recalcular
    div.style.height = div.scrollHeight + 'px'; // Ajustar la altura al scrollHeight
}

// Llamar a la función para ajustar la altura inicialmente
ajustarAlturaDiv();