function calcularVelocidadFinal() {
    const vi = parseFloat(document.getElementById('vi').value);
    const a = parseFloat(document.getElementById('a').value);
    const t = parseFloat(document.getElementById('t').value);
    const vf = vi + (a * t);
    document.getElementById('resultado-velocidad-final').innerText = `La Velocidad Final es: ${vf.toFixed(2)} m/s`;
}

function limpiarVelocidadFinal() {
    document.getElementById('vi').value = '';
    document.getElementById('a').value = '';
    document.getElementById('t').value = '';
    document.getElementById('resultado-velocidad-final').innerText = '-';
}

function calcularDistanciaRecorrida() {
    const vi = parseFloat(document.getElementById('vi-distancia').value);
    const a = parseFloat(document.getElementById('a-distancia').value);
    const t = parseFloat(document.getElementById('t-distancia').value);
    const d = (vi * t) + (0.5 * a * t * t);
    document.getElementById('resultado-distancia').innerText = `La Distancia Recorrida es: ${d.toFixed(2)} m`;
}

function limpiarDistanciaRecorrida() {
    document.getElementById('vi-distancia').value = '';
    document.getElementById('a-distancia').value = '';
    document.getElementById('t-distancia').value = '';
    document.getElementById('resultado-distancia').innerText = '-';
}

function calcularVelocidadInicial() {
    const vf = parseFloat(document.getElementById('vf').value);
    const a = parseFloat(document.getElementById('a-vi').value);
    const t = parseFloat(document.getElementById('t-vi').value);
    const vi = vf - (a * t);
    document.getElementById('resultado-velocidad-inicial').innerText = `La Velocidad Inicial es: ${vi.toFixed(2)} m/s`;
}

function limpiarVelocidadInicial() {
    document.getElementById('vf').value = '';
    document.getElementById('a-vi').value = '';
    document.getElementById('t-vi').value = '';
    document.getElementById('resultado-velocidad-inicial').innerText = '-';
}

function calcularTiempo() {
    const vi = parseFloat(document.getElementById('vi-tiempo').value);
    const vf = parseFloat(document.getElementById('vf-tiempo').value);
    const a = parseFloat(document.getElementById('a-tiempo').value);
    const t = (vf - vi) / a;
    document.getElementById('resultado-tiempo').innerText = `El Tiempo es: ${t.toFixed(2)} s`;
}

function limpiarTiempo() {
    document.getElementById('vi-tiempo').value = '';
    document.getElementById('vf-tiempo').value = '';
    document.getElementById('a-tiempo').value = '';
    document.getElementById('resultado-tiempo').innerText = '-';
}