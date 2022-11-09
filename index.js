console.log('JS Loaded');

var elementoDeConteo = document.getElementById('countdown');
var imagenInicial = document.getElementById('bg-image');
var initialValue = elementoDeConteo.innerHTML;

setInterval(function(){
    initialValue = initialValue > 0 ? initialValue - 1 : 10;
    elementoDeConteo.innerHTML = initialValue;

    var imagen = initialValue % 2 === 0 ? '/assets/uno.jpg' : '/assets/dos.jpg';
    imagenInicial.src = imagen;
}, 1000);