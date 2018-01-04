
// Agregando o quitando

$(function(){
    'use strict';
    
    
    
    // obtener el valor
     jQuery('.navegacion ul li:first a').attr('href');
    
    // cambiar el valor
    jQuery('.navegacion ul li:first a').attr('href', 'http://udemy.com');
    
     jQuery('.navegacion ul li:first a').attr('target', '_blank');
    
   // $('main article:first img').attr('src', 'img/imagen_2.jpg');
    
     $('main article:first img').on('click', function() {
         $(this).attr('src', 'img/imagen_2.jpg');
     });
    
});