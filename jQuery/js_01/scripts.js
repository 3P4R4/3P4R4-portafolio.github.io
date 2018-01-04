/*
$(document).ready(function() {
    console.log("listo!");
});
METODO UNO UTILIZADO*/
/*METODO DOS A UTILIZAR*/


/**** Trabajando con el apartado de SERVICIOS ***/

$(function () {

    $('.viajes').hide();
    $('.asesoria').hide();
    $('.transporte').hide();

    $('#viajes').click(function(){
      $('.viajes').show(1000);
      $('.asesoria').hide('slow');
      $('.transporte').hide('slow');
      return false;
    });

    $('#asesoria').click(function(){
      $('.viajes').hide('slow');
      $('.asesoria').show(1000);
      $('.transporte').hide('slow');
      return false;
    });

    $('#transporte').click(function(){
      $('.viajes').hide('slow');
      $('.asesoria').hide('slow');
      $('.transporte').show(1000);
      return false;
    });


  });

$(function(){
  $('.nuestros-servicios div:first').show();
  $('.servicios nav a:first').addClass('activo');

  $('.servicios nav a').on('click', mostrarActivo);
/* con esta funcion mantenemos ACTIVO o RESALTADO el enlace al darle click */
  function mostrarActivo(){
    $('.servicios nav a').removeClass('activo');
    $(this).addClass('activo');
  }
});


/*************************************************/

/*** Trabajando con arrays o Arreglos en jquery ***/

    /*var proximosViajes = ['Maracaibo', 'Valencia', 'Caracas', 'Trujillo', 'Barquisimeto'];

/* donde "i" es el index y "v" es el valor */
  /*  $.each(proximosViajes, function(i, v){
       if (i==0) {
         $('aside').append('<h2>Proximos Viajes</h2>');
       }
        $('aside').append('<li>' + v +  ' </li>');
    });

/*** Trabajando con Objetos en jQuery ***/

    /*var viajesPorFechas = {
      primero: 'Maracaibo',
      segundo: 'Valencia',
      tercero: 'Caracas',
      cuarto: 'Trujillo',
      quinto: 'Barquisimeto'
    };

  console.log(viajesPorFechas);

$.each(viajesPorFechas, function(i, v){
  $('aside').append('</br>' + '<li>' + i + '-' + v + '</li>');
});*/

    /********************************************/




    /***** Trabajando con Ajax *****/

   /* $('aside').load('promociones.html');


    /********* O *********/
/*
    $('div.logo img').on ('click', cargarAjax);

    function cargarAjax() {
      $.ajax('promociones.txt', {
        success: agregarContenido,
        type:'GET',
        datatype: 'text'
      });
    }

    function agregarContenido(data, status, jqxhr) {
      $('aside').text(data);
      console.log(status);
    }

    /*********************************/

    /**** Diseñando Animaciones con jQuery */
  /*   $('.logo img').click(function(){
        $('main article:first').slideUp(1000);
      });

      $('aside').click(function(){
        $('main article:first').slideDown(1000);
      });


/*
    $('.logo img').on ('click', function(){
      $(this).animate({'width': '200px'}, 1000);
      $(this).animate({'width': '500px'}, 1000);
    });

    $('main article img').on ('mouseenter', aumentarImagen);
    $('main article img').on ('mouseleave', disminuirImagen);

    function aumentarImagen(){
      $(this).animate({'width': '100%'});
    }
    function disminuirImagen(){
      $(this).animate({'width': '350px'});
    }
*/

    /*************************************/

/***** Trabajando con CSS en jQuery *****/

/*  $('.logo img').css('width', '400px'); /*metodo1*/

/*  $('main article h2').css({'color': '#db008d'});/*metodo2*/

  /*$("aside").css({'background-color': '#e1e1e1',/*metodo3*/
              /*    'text-transform': 'uppercase',
                  'padding': '20px'
});

 /*$('.navegacion ul li a').on ('mouseenter', cambiarColor);
    function cambiarColor(){
      $('.navegacion').css ('background-color', 'red');
    }*/
    /**** Metodo con condicional ****/

 /*$('.navegacion ul li a').on ({
     mouseenter: function cambiarColor(){
       $('.navegacion').css ('background-color', 'red');
    },
      mouseleave: function cambiarColor(){
        $('.navegacion').css ('background-color', 'blue');
     },
 });
*/

/*****************************************/
    /************************************/
    /*Primer MODO*/

    /*$("article:first img").on ('mouseenter', function(){
      $(this).attr('src', 'img/imagen_3.jpg')
      $("article:first img").on ('mouseleave', function(){
        $(this).attr('src', 'img/imagen_2.jpg')
      });
    });*/

    /*Segundo MODO*/

    /*$("article:first img").on({
      mouseenter: function(){
        $(this).attr('src', 'img/imagen_3.jpg')
      },
      mouseleave: function(){
        $(this).attr('src', 'img/imagen_2.jpg')
      }
    });*/

    /***************************************/



 /*Selector Complejo*/

  /*$('main').on({
    click: function(){
      $(this).addClass('fondorojo activo');
    },
    mouseenter: function(){
      $(this).addClass('fondorojo');
    },
    mouseleave: function(){
      $(this).removeClass('fondorojo');
    }
  });


 /********************************/

/*
    $('div.logo img').addClass('activo');*/

  /*  $('.navegacion').show();
    /*$('.navegacion nav ul li:first').addClass('activo');*/
/*
    $('.navegacion ul li a').on ('click', function(e){
      $('.navegacion ul li a').removeClass('activo');/*esta es con el fin de seleccionar un solo enlace*/
/*      e.preventDefault();
      $(this).addClass('activo');
    });
*/
/*
    $('#menu').on ('click', function(){
    $('#navegacion').toggleClass().slideToggle();
  });
*/

/*
    $('div.logo img').on ('mouseenter', function(){
      console.log("sobre el logo");
    });
    $('div.logo img').on ('mouseleave', function(){
      console.log("fuera del logo");
    });
*/
/*
    $('div.logo img').on ('click', function(){
    $(this).remove();
    });
*/

/*
    $('div.logo img').on ('click', function(){
      console.log("Has hecho click en el logo");
    });
*/

  /*
      jQuery('main article:first').hide();
  "NOTEMOS QUE SOLO CAMBIA EL PRIMER ARGUMENTO"
  "AMBOS METODOS SON VALIDOS"
  *//*
      $('main article:first').hide();

      var copia = $('main article:last').clone();
      $(copia).prependTo('main');
      /*Tambien hay un segundo metodo*/
      /*
      $('main').prepend(copia);
      */
/*
});*/
