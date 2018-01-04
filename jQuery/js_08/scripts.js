
// Agregando o quitando

$(function(){
    'use strict';
    
    
    $('main article:first h2');
    
    // obtener el texto
    $('main article:first h2').text();
    
    // Cambiar el Texto
    $('main article:first h2').text("Hola");
    
    $('main article:first h2').html('<h1>Hola Mundo</h1>');
    
    
    $('.navegacion ul li:first a').text();
    
    $('.navegacion ul li:first a').text('Home');
    
});