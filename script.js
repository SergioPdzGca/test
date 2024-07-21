const fileInput = document.getElementById('fileInput');
const resultDiv = document.getElementById('result');

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        // Cargar la imagen seleccionada
        const imageUrl = URL.createObjectURL(file);

        // Configurar QuaggaJS
        Quagga.decodeSingle({
            src: imageUrl,
            numOfWorkers: 0,  // Usar el hilo principal para evitar problemas con CORS
            inputStream: {
                size: 800  // Tamaño máximo de la imagen (píxeles)
            },
            decoder: {
                readers: ['ean_reader']  // Tipo de códigos de barras que se van a detectar
            },
        }, function(result) {
            if (result && result.codeResult) {
                // Mostrar el resultado en la página
                resultDiv.textContent = 'Código de Barras detectado: ' + result.codeResult.code;
            } else {
                resultDiv.textContent = 'No se encontraron códigos de barras.';
            }
        });
    }
});
