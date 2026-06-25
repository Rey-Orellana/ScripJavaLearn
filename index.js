const DOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const window = new JSDOM('').window;
const purify = DOMPurify(window);

const comentarioDelUsuario = "<script>alert('hackeado')</script> Excelente post!";
// Limpia el código malicioso
const comentarioSeguro = purify.sanitize(comentarioDelUsuario); 

console.log(comentarioSeguro); // Resultado: " Excelente post!"