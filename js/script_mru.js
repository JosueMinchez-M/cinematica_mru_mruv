function mostrarCampos() {
    const tipoCalculo = document.getElementById('tipo-calculo').value;
    const campoDistancia = document.getElementById('campo-distancia');
    const campoVelocidad = document.getElementById('campo-velocidad');
    const campoTiempo = document.getElementById('campo-tiempo');

    // Mostrar/ocultar campos según el tipo de cálculo seleccionado
    switch (tipoCalculo) {
        case 'distancia':
            campoDistancia.style.display = 'none';
            campoVelocidad.style.display = 'block';
            campoTiempo.style.display = 'block';
            break;
        case 'velocidad':
            campoDistancia.style.display = 'block';
            campoVelocidad.style.display = 'none';
            campoTiempo.style.display = 'block';
            break;
        case 'tiempo':
            campoDistancia.style.display = 'block';
            campoVelocidad.style.display = 'block';
            campoTiempo.style.display = 'none';
            break;
    }
}

function calcular() {
    const tipoCalculo = document.getElementById('tipo-calculo').value;
    const distancia = parseFloat(document.getElementById('distancia').value);
    const velocidad = parseFloat(document.getElementById('velocidad').value);
    const tiempo = parseFloat(document.getElementById('tiempo').value);
    let resultado = 0;
    let dimensional = "";

    if (isNaN(distancia) && tipoCalculo !== 'distancia' || isNaN(velocidad) && tipoCalculo !== 'velocidad' || isNaN(tiempo) && tipoCalculo !== 'tiempo') {
        alert("Por favor, ingrese valores válidos para los campos requeridos.");
        return;
    }

    // Realizar el cálculo según el tipo seleccionado
    switch (tipoCalculo) {
        case 'distancia':
            resultado = velocidad * tiempo;
            dimensional = 'm';
            break;
        case 'velocidad':
            resultado = distancia / tiempo;
            dimensional = 'm/s';
            break;
        case 'tiempo':
            resultado = distancia / velocidad;
            dimensional = 's';
            break;
    }

    document.getElementById('resultado').innerText = resultado.toFixed(2) + " " + dimensional;
}

function resetearCampos() {
    document.getElementById('distancia').value = '';
    document.getElementById('velocidad').value = '';
    document.getElementById('tiempo').value = '';
    document.getElementById('resultado').innerText = '0';
    mostrarCampos();
}

// Inicializar los campos al cargar la página
mostrarCampos();