
// Cambiar CSS

$(function(){
    'use strict';
    
    
    // Lo esconde
  $('.logo img').click(function() {
     $('main article:first').slideUp(1000); 
  });
    
    // lo muestra
    
  $('aside').click(function() {
     $('main article:first').slideDown(1000); 
  });
    
    
});