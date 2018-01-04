
// Cambiar CSS

$(function(){
    'use strict';
    
    // cambiando el width 
    $('.logo img').css({'width': '200px'});
    
    $('main article h2').css({'color': '#db008d'});
    
    $('aside').css({'background-color': '#e1e1e1', 
                    'text-transform': 'uppercase',
                    'padding' : '20px'
                   });
    
   $('.navegacion ul li a').on('mouseenter', cambiarColor);
    
    function cambiarColor() {
       $('.navegacion').css('background-color', 'red');
    }
    
    
    
});