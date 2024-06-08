function generatePassword() {
    const length = document.getElementById('length').value;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeSpecial = document.getElementById('include-special').checked;

    fetch(`/generate-password?length=${length}&numbers=${includeNumbers ? 'on' : 'off'}&special=${includeSpecial ? 'on' : 'off'}`)
        .then(response => response.json())
        .then(data => {
            // Obtener la contraseña generada
            const password = data.password;

            // Resaltar los números en azul y los símbolos en rojo
            let highlightedPassword = '';
            for (let i = 0; i < password.length; i++) {
                const char = password[i];
                if (/\d/.test(char)) {
                    highlightedPassword += `<span class="numbers">${char}</span>`;
                } else if (/[^\w\s]/.test(char)) {
                    highlightedPassword += `<span class="symbol">${char}</span>`;
                } else {
                    highlightedPassword += char;
                }
            }

            // Mostrar la contraseña resaltada en el div
            document.getElementById('password-display').innerHTML = highlightedPassword;
            // Restaurar el mensaje
            document.getElementById('copy-message').textContent = 'Password not Copied';
            document.getElementById('copy-message-container').classList.remove('copied');
        });
}




// Agregar el evento 'click' al botón de generación de contraseña
document.getElementById('generate-button').addEventListener('click', generatePassword);

// Agregar el evento 'input' al campo de longitud de contraseña
document.getElementById('length').addEventListener('input', (event) => {
    document.getElementById('length-value').textContent = event.target.value;
});



window.addEventListener('load', () => {
    document.getElementById('include-numbers').checked = true;
    generatePassword();
});

document.getElementById('copy-button').addEventListener('click', () => {
    const password = document.getElementById('password-display').textContent;
    navigator.clipboard.writeText(password)
        .then(() => {
            document.getElementById('copy-message').textContent = 'Password Copied';
            document.getElementById('copy-message-container').classList.add('copied'); 
        })
        .catch(error => {
            console.error('Error al copiar la contraseña: ', error);
        });
});

