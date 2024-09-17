window.onload = function() {
  const valores = document.querySelectorAll('table tr td:nth-child(2)');
  let total = 0;

  valores.forEach(function(valor) {
    const valorNumerico = parseFloat(valor.textContent);
    if (!isNaN(valorNumerico)) {
      total += valorNumerico;
    }
  });

  const campoTotal = document.getElementById('total');
  campoTotal.textContent = total.toFixed(2);
}
