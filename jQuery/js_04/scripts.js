
// Agregando o quitando

$(function(){
    'use strict';
    
    /*
    $('.logo img').on('click', function() {
        console.log("has hecho click en el logo"); 
    });
    */
    /*
    $('.logo img').on('click', function() {
       $('.logo img').remove();
    });
    */
    
    $('.logo img').on('mouseenter', function() {
       console.log("sobre el logo");
    });
        
    $('.logo img').on('mouseleave', function() {
       console.log("fuera del logo");
    });
    /*
    $('.logo img').on('click', function() {
       $(this).remove();
    });
    */
    
    $('#menu').on('click', function() {
       $('#navegacion').show(); 
    });
    
    
    
    $('#navegacion ul li a').on('click', function(event){
        event.preventDefault();
       console.log("has hecho click"); 
    });
    
    
    
    
});