var api = 'AIzaSyDNqNirHgs2rCAg5HrNR6Dn8j0hE64ZBP8';
//var api2 = 'AIzaSyC5POw3seuGerkwC2qQu9nMOpO1xky1qTY';

function initMap() {
  var latLng = {
    lat: 10.6251435,
    lng: -71.6223357
  }
  var map = new google.maps.Map(document.getElementById('mapa'), {
      center: latLng,
      zoom: 16,
      //'mapTypeId': google.maps.mapTypedId.ROADMAP,
      });

  var contenido = '<h2>GDLWEBCAMP</h2>' +
                  '<h3>Ven y visitanos!</h3>';

  var informacion = new google.maps.InfoWindow({
    content: contenido
  });

  var marker = new google.maps.Marker({
          map: map,
          draggable: true,
          animation: google.maps.Animation.DROP,
          position: latLng,
          title: "GDLWEBCAMP"
        });

  marker.addListener('click', function(){
    informacion.open(map, marker);
  });
    }


 (function() {
  'use strict';

  var regalo = document.getElementById('regalo');

  document.addEventListener('DOMContentLoaded', function(){

    // Campo Datos de Usuario
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var email = document.getElementById('email');
    // Camo Pases
    var pase_dia = document.getElementById('pase_dia');
    var pase_dos_dias = document.getElementById('pase_dos_dias');
    var pase_completo = document.getElementById('pase_completo');

    // Botones y Divs vacios
    var calcular = document.getElementById('calcular');
    var errorDiv = document.getElementById('error');
    var BotonRegistro = document.getElementById('pagar');
    var lista_productos = document.getElementById('lista-productos');
    var suma = document.getElementById('suma-total');

    // Extras
    var camisas = document.getElementById('camisa_evento');
    var etiquetas = document.getElementById('etiquetas');
    var pulseras = document.getElementById('pulseras');
    var plumas = document.getElementById('plumas');


    /* Click al Boton CALCULAR */

    if (document.getElementById('calcular')) { //esto es para ocultar los errores mostrados en el DOM


    calcular.addEventListener('click', calcularMontos);

    pase_dia.addEventListener('blur', mostrarDias);
    pase_dos_dias.addEventListener('blur', mostrarDias);
    pase_completo.addEventListener('blur', mostrarDias);

    // Error Divs para los campos de NOMBRE, APELLIDO y EMAIL...
/* modo largo */
    /*nombre.addEventListener('blur', function(){
      if (this.value == '') {
        errorDiv.style.display = 'block';
        errorDiv.innerHTML = 'este campo es obliatorio';
        this.style.border = '1px solid red';
      }
    })
    apellido.addEventListener('blur', function(){
      if (this.value == '') {
        errorDiv.style.display = 'block';
        errorDiv.innerHTML = 'este campo es obliatorio';
        this.style.border = '1px solid red';
      }
    })
    email.addEventListener('blur', function(){
      if (this.value == '') {
        errorDiv.style.display = 'block';
        errorDiv.innerHTML = 'este campo es obliatorio';
        this.style.border = '1px solid red';
      }
    })*/

/* modo corto, codigomjorado */

  nombre.addEventListener('blur', validarCampos);
  apellido.addEventListener('blur', validarCampos);
  email.addEventListener('blur', validarCampos);
  email.addEventListener('blur', validarMail);

  function validarCampos(){
    if (this.value == '') {
      errorDiv.style.display = 'block';
      errorDiv.innerHTML = 'este campo es obliatorio';
      this.style.border = '1px solid red';
    }
    else {
      errorDiv.style.display = 'none';
      this.style.border = '1px solid #cccccc';
    }
  }
  function validarMail(){
    if (this.value.indexOf("@") > -1) {
      errorDiv.style.display = 'none';
      this.style.border = '1px solid #cccccc';
      }

    if (this.value.indexOf(".") > -1) {
      errorDiv.style.display = 'none';
      this.style.border = '1px solid #cccccc';
    }
    if (this.value.indexOf("yahoo") > -1) {
      errorDiv.style.display = 'none';
      this.style.border = '1px solid #cccccc';
    }
    if (this.value.indexOf("hotmail") > -1) {
      errorDiv.style.display = 'none';
      this.style.border = '1px solid #cccccc';
    }
    if (this.value.indexOf("gmail") > -1) {
      errorDiv.style.display = 'none';
      this.style.border = '1px solid #cccccc';
    }
    else {
      errorDiv.style.display = 'block';
      errorDiv.innerHTML = "Debes colocar una direccion EMAIL valida";
      this.style.border = '1px solid red';
    }
  }





    function calcularMontos (event){
      event.preventDefault();
      if (regalo.value === '') {
        alert('Debes elegir un regalo');
        regalo.focus();
      }
      else {
        var boletoDia = parseInt(pase_dia.value, 10)|| 0,
            boleto2dias = parseInt(pase_dos_dias.value, 10)|| 0,
            boletoCompleto = parseInt(pase_completo.value, 10)|| 0,
            cantCamisas = parseInt(camisas.value, 10)|| 0,
            cantEtiquetas = parseInt(etiquetas.value, 10)|| 0;
            // El metodo "parse Int" es para asegurarnos que solo se incluyan numero

        var totalPagar = (boletoDia * 30) + (boleto2dias * 45) + (boletoCompleto * 50) + ((cantCamisas * 50) * 0.93) + (cantEtiquetas*10);

        var ListadoProductos = [];

        if (boletoDia === 1) {
          ListadoProductos.push(boletoDia + ' Pase por dia');
        }
        if (boleto2dias === 1) {
          ListadoProductos.push(boleto2dias + ' Pase por 2 dias');
        }
        if (boletoCompleto === 1) {
          ListadoProductos.push(boletoCompleto + ' Pase Completo');
        }
        if (boletoDia > 1) {
          ListadoProductos.push(boletoDia + ' Pases por dia');
        }
        if (boleto2dias > 1) {
          ListadoProductos.push(boleto2dias + ' Pases por 2 dias');
        }
        if (boletoCompleto > 1) {
          ListadoProductos.push(boletoCompleto + ' Pases Completo');
        }
        if (cantCamisas === 1) {
          ListadoProductos.push(cantCamisas + ' Camisa');
        }
        if (cantCamisas > 1) {
          ListadoProductos.push(cantCamisas + ' Camisas');
        }
        if (cantEtiquetas === 1) {
          ListadoProductos.push(cantEtiquetas + ' Etiqueta');
        }
        if (cantEtiquetas > 1) {
          ListadoProductos.push(cantEtiquetas + ' Etiquetas');
        }


        lista_productos.style.display = 'block'; // esto es para tomar control de CSS en JS

        lista_productos.innerHTML = '';
        for (var i = 0; i < ListadoProductos.length; i++) {
          lista_productos.innerHTML += ListadoProductos[i] + '<br/>';
        }

        suma.innerHTML = "BsF " + totalPagar.toFixed(2);

      }
    }

    function mostrarDias(){
      var boletoDia = parseInt(pase_dia.value, 10)|| 0,
          boleto2dias = parseInt(pase_dos_dias.value, 10)|| 0,
          boletoCompleto = parseInt(pase_completo.value, 10)|| 0;

          var diasElegidos = [];

          if (boletoDia >= 1) {
            diasElegidos.push('viernes');
          }

          if (boleto2dias >= 1) {
            diasElegidos.push('viernes', 'sabado');
          }
          if (boletoCompleto >= 1) {
            diasElegidos.push('viernes', 'sabado', 'domingo');
          }
          for(var i=0; i<diasElegidos.length; i++){
            document.getElementById(diasElegidos[i]).style.display= 'block';
          }
    }
}
}); // DOM CONTENT LOADED

})();

/*************** Trabajando con jQuery ************************/
/* No se por que no me funciona */
/*
$(function(){

  // Programa de Conferencias
  $('.programa-evento .info-curso:first').show();
//  $('.menu-programa a:first').addClass('activo');

  $('.menu-programa a').on ('click', function(){
      //$('.menu-programa a').removeClass('activo');
      //$(this).addClass('activo');
      $('ocultar').hide();
    var enlace = $(this).attr('href');
    $(enlace).fadeIn(1000);
    return false;
  });
});
*/

$(function () {


    $('.talleres').hide();
    $('.conferencias').hide();
    $('.seminarios').hide();

 $('#talleres').click(function(){
      $('.talleres').show(1000);
      $('.conferencias').hide('slow');
      $('.seminarios').hide('slow');
      return false;
    });

    $('#conferencias').click(function(){
      $('.talleres').hide('slow');
      $('.conferencias').show(1000);
      $('.seminarios').hide('slow');
      return false;
    });

    $('#seminarios').click(function(){
      $('.talleres').hide('slow');
      $('.conferencias').hide('slow');
      $('.seminarios').show(1000);
      return false;
    });


  });

$(function(){

  "use strict";

  $('.programa-evento div:first').show();
$('.menu-programa a:first').addClass('activo');

  $('.menu-programa a').on('click', mostrarActivo);
/*con esta funcion mantenemos ACTIVO o RESALTADO el enlace al darle click */
function mostrarActivo(){
   $('.menu-programa a').removeClass('activo');
    $(this).addClass('activo');
  }
});

/*** Animaciones de NUmeros ***/
$(function (){
  /* se puede hacer de muchas manera */
  /*
  $('.resumen-evento li p').eq(0).animateNumber({number: 6}, 1200);*/
  /*$('.resumen-evento li:lt(1) p').animateNumber({number: 6}, 1200);*/
  /*$('.resumen-evento li:gt(1) p').animateNumber({number: 6}, 1200);*/
  $('.resumen-evento li:nth-child(1) p').animateNumber({number: 6}, 1200);
  $('.resumen-evento li:nth-child(2) p').animateNumber({number: 15}, 1200);
  $('.resumen-evento li:nth-child(3) p').animateNumber({number: 3}, 1200);
  $('.resumen-evento li:nth-child(4) p').animateNumber({number: 9}, 1200);

 // Cuenta regresiva

  $('.cuenta-regresiva').countdown('2017/12/24 00:00:00', function(event) {
  $('#dias').html(event.strftime('%D'));
  $('#horas').html(event.strftime('%H'));
  $('#minutos').html(event.strftime('%M'));
  $('#segundos').html(event.strftime('%S'));

  // lettering

  $('.nombre-del-sitio').lettering();
});
});

// Scroll de menu fijo
/*Para conocer el tamaño de la ventana en pixeles*/
var tamañoDeLaVentana = $(window).height();
var barraAltura = $('.barra').innerHeight();

$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  if (scroll>tamañoDeLaVentana) {
    $('.barra').addClass('fixed')
    $('body').css({'margin-top': barraAltura+'px'});//para evitar ese brinco de la pagina
  }
  else{
    $('.barra').removeClass('fixed')
    $('body').css({'margin-top': '0px'});//aqui le quitamos el brinco superior
  }
});
