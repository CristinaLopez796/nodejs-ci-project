function sumar(a, b) {
  return a + b;
}

function esPar(numero) {
  return numero % 2 === 0;
}

function capitalizar(texto) {
  if (!texto) return "";
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

module.exports = {
  sumar,
  esPar,
  capitalizar,
};