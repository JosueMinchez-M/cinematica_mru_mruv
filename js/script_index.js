// Función para cargar contenido en el iframe
function loadContent(page) {
    document.getElementById('content-frame').src = page;
}

// Permite ajustar la altura del iframe del index.html
function ajustarAlturaIframe() {
    var iframe = document.getElementById('content-frame');
    iframe.onload = function() {
      iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    }
  }

  window.addEventListener('load', ajustarAlturaIframe);