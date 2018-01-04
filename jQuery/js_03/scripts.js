
// Agregando o quitando

$(function(){
    'use strict';
    
    // Borrar Elemento
    //$('main article:first').remove();
    
    // ocultar elemento
   // $('main article:first').hide();
    
//clonar elemento y agregarlo al final
 //  var copia = $('main article:last').clone();
//   $('main').append(copia);

   // clonar elemento y agregarlo al inicio
   // var copia = $('main article:last').clone();
   // $('main').prepend(copia);
    
    // otra forma
   // var copia = $('main article:last').clone();
    // $(copia).prependTo('main');
    
    // segunda
    var copia = $('main article:last').clone();
    $(copia).appendTo('main');
    
    
    
    
    
});