// Referencias a los elementos HTML
const inputField = document.querySelector('#inputText');
const outputField = document.querySelector('#outputText');
const encryptBtn = document.querySelector('#encryptBtn');
const decryptBtn = document.querySelector('#decryptBtn');
const copyBtn = document.querySelector('#copyBtn');

// Función para validar el texto (sin mayúsculas ni caracteres especiales)
function validarTexto(text) {
    const regex = /^[a-z\s]*$/; // Solo letras minúsculas y espacios
    return regex.test(text);
}

// Función para encriptar texto
function encriptar() {
    let text = inputField.value;
    if (!validarTexto(text)) {
        alert('Solo se permiten letras minúsculas y espacios.');
        return;
    }
    // Ejemplo de lógica de encriptación (cambiar letras a números)
    let textEncriptado = text.replace(/a/g, '1').replace(/e/g, '2').replace(/i/g, '3').replace(/o/g, '4').replace(/u/g, '5');
    outputField.textContent = textEncriptado;
}

// Función para descifrar texto
function descifrar() {
    let text = inputField.value;
    if (!validarTexto(text)) {
        alert('Solo se permiten letras minúsculas y espacios.');
        return;
    }
    // Ejemplo de lógica de desencriptación (cambiar números a letras)
    let textDescifrado = text.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o').replace(/5/g, 'u');
    outputField.textContent = textDescifrado;
}

// Función para copiar texto al portapapeles
function copiarAlPortapapeles() {
    navigator.clipboard.writeText(outputField.textContent)
        .then(() => {
            alert('Texto copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar texto: ', err);
        });
}

// Event Listeners para los botones
encryptBtn.addEventListener('click', encriptar);
decryptBtn.addEventListener('click', descifrar);
copyBtn.addEventListener('click', copiarAlPortapapeles);
