$(document).on("ready",function(){
        //ENVIO DE CORREO

        $('#btn-enviar').on('click',function(){
            $('#respuesta').html('Enviando Mensaje...');

            var nombre = $('#nombre').val();
            var telefono = $('#telefono').val();
            var email = $('#email').val();
            var mensaje = $('#mensaje').val();

            if (nombre=='' || telefono=='' || email=='' || mensaje=='') {

                $('#respuesta').html('Error, complete los campos correctamente');

            } else {

                $.post('mail.php',{'nombre':nombre,'telefono':telefono,'email':email,'mensaje':mensaje},function(datos){
                          lista = JSON.parse(datos);
                          if (lista.respuesta=='ok'){
                             $('#respuesta').html('El mensaje fue enviado correctamente. En breve nos comunicaremos con ustedes. Muchas gracias');
                          } else {
                             $('#respuesta').html('Error al enviar el mensaje, intentelo nuevamente');
                          }
                });

            }    

        });


        //ACTUALIZA EL ACTIVE DEL MENU
        $('body').scrollspy({target: ".navbar", offset: 100});
        $('[data-spy="scroll"]').each(function () {
            var $spy = $(this).scrollspy('refresh');
        });


        /*Efecto al scrollear*/

        'use strict';

        window.sr= new scrollReveal({
          mobile: true
        });


        // jQuery for page scrolling feature - requires jQuery Easing plugin
        $('#menu a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 92
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });

        /*SLIDE HOME SMARTPHONES XS*/

          var owl = $("#owl-home-xs");

          owl.owlCarousel({
              items : 5, //10 items above 1000px browser width
              itemsDesktop : [1000,5], //5 items between 1000px and 901px
              itemsDesktopSmall : [900,3], // betweem 900px and 601px
              itemsTablet: [600,1], //2 items between 600 and 0
              itemsMobile : true, // itemsMobile disabled - inherit from itemsTablet option
              autoPlay: false,

          });

           owl.trigger('owl.play',2000);

          // Custom Navigation Events
          $(".next").click(function(){
            owl.trigger('owl.next');
          });

          $(".prev").click(function(){
            owl.trigger('owl.prev');
          });

          $(".play").click(function(){
            owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
          });

          $(".stop").click(function(){
            owl.trigger('owl.stop');
          });

        /*SLIDE DECOBA*/

        $("#owl-decoba").owlCarousel({
            items : 1, //10 items above 1000px browser width
            itemsDesktop : [1000,1],//5 items between 1000px and 901px
            itemsDesktopSmall : [900,1], // betweem 900px and 601px
            itemsTablet: [600,1], //2 items between 600 and 0
            itemsMobile : true, // itemsMobile disabled - inherit from itemsTablet option
            autoPlay: true
        });

        /*SLIDE MT2*/

        $("#owl-mt2").owlCarousel({
            items : 1, //10 items above 1000px browser width
            itemsDesktop : [1000,1],//5 items between 1000px and 901px
            itemsDesktopSmall : [900,1], // betweem 900px and 601px
            itemsTablet: [600,1], //2 items between 600 and 0
            itemsMobile : true, // itemsMobile disabled - inherit from itemsTablet option
            autoPlay: true
        });

        // Custom Navigation Events
        $(".next").click(function(){
          owl.trigger('owl.next');
        })
        $(".prev").click(function(){
          owl.trigger('owl.prev');
        })
        $(".play").click(function(){
          owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
        })
        $(".stop").click(function(){
          owl.trigger('owl.stop');
        });


         /*SLIDES INDIVIDUALES DE LOS PROYECTOS*/

         $(document).ready(function() {
      	  $("#proyectoFito").owlCarousel({
      	      navigation : true, // Show next and prev buttons
      	      slideSpeed : 500,
      	      paginationSpeed : 400,
      	      autoHeight : false,
      	      items : 1,
              autoPlay : true,
              autoWidth : true,
              itemsDesktop : [1199,1],
              itemsDesktopSmall : [980,1],
              itemsTablet: [768,1],
              itemsMobile : [479,1]
      	  });

      	  $("#proyectoSanMartin").owlCarousel({
      	      navigation : true, // Show next and prev buttons
      	      slideSpeed : 500,
      	      paginationSpeed : 400,
      	      items : 1,
              itemsMobile : true,
              autoPlay : true,
              autoWidth : true,
              itemsDesktop : [1199,1],
              itemsDesktopSmall : [980,1],
              itemsTablet: [768,1],
              itemsMobile : [479,1]
      	  });


        $("#proyectoArseli").owlCarousel({
              navigation : true, // Show next and prev buttons
              slideSpeed : 500,
              paginationSpeed : 400,
              autoHeight : false,
              items : 1,
              autoPlay : true,
              autoWidth : true,
              itemsDesktop : [1199,1],
              itemsDesktopSmall : [980,1],
              itemsTablet: [768,1],
              itemsMobile : [479,1]
          });

        $("#proyectoLavalle").owlCarousel({
              navigation : true, // Show next and prev buttons
              slideSpeed : 500,
              paginationSpeed : 400,
              autoHeight : false,
              items : 1,
              autoPlay : true,
              autoWidth : true,
              itemsDesktop : [1199,1],
              itemsDesktopSmall : [980,1],
              itemsTablet: [768,1],
              itemsMobile : [479,1]
          });

        $("#proyectoVron").owlCarousel({
              navigation : true, // Show next and prev buttons
              slideSpeed : 500,
              paginationSpeed : 400,
              autoHeight : false,
              items : 1,
              autoPlay : true,
              autoWidth : true,
              itemsDesktop : [1199,1],
              itemsDesktopSmall : [980,1],
              itemsTablet: [768,1],
              itemsMobile : [479,1]
          });

        $("#proyectoMoreno").owlCarousel({
              navigation : true, // Show next and prev buttons
              slideSpeed : 500,
              paginationSpeed : 400,
              autoHeight : false,
              items : 1,
              autoPlay : true,
              autoWidth : true,
              itemsDesktop : [1199,1],
              itemsDesktopSmall : [980,1],
              itemsTablet: [768,1],
              itemsMobile : [479,1]
          });

        $("#proyectoOnsari").owlCarousel({
              navigation : true, // Show next and prev buttons
              slideSpeed : 500,
              paginationSpeed : 400,
              autoHeight : false,
              items : 1,
              autoPlay : true,
              autoWidth : true,
              itemsDesktop : [1199,1],
              itemsDesktopSmall : [980,1],
              itemsTablet: [768,1],
              itemsMobile : [479,1]
          });

        $("#proyectoVricella").owlCarousel({
              navigation : true, // Show next and prev buttons
              slideSpeed : 500,
              paginationSpeed : 400,
              autoHeight : false,
              items : 1,
              autoPlay : true,
              autoWidth : true,
              itemsDesktop : [1199,1],
              itemsDesktopSmall : [980,1],
              itemsTablet: [768,1],
              itemsMobile : [479,1]
          });

        $("#proyectoSeikano").owlCarousel({
              navigation : true, // Show next and prev buttons
              slideSpeed : 500,
              paginationSpeed : 400,
              autoHeight : false,
              items : 1,
              autoPlay : true,
              autoWidth : true,
              itemsDesktop : [1199,1],
              itemsDesktopSmall : [980,1],
              itemsTablet: [768,1],
              itemsMobile : [479,1]
          });

        $("#proyectoChacras").owlCarousel({
              navigation : true, // Show next and prev buttons
              slideSpeed : 500,
              paginationSpeed : 400,
              autoHeight : false,
              items : 1,
              autoPlay : true,
              autoWidth : true,
              itemsDesktop : [1199,1],
              itemsDesktopSmall : [980,1],
              itemsTablet: [768,1],
              itemsMobile : [479,1]
          });

        $("#proyectoBongiovanni").owlCarousel({
              navigation : true, // Show next and prev buttons
              slideSpeed : 500,
              paginationSpeed : 400,
              autoHeight : false,
              items : 1,
              autoPlay : true,
              autoWidth : true,
              itemsDesktop : [1199,1],
              itemsDesktopSmall : [980,1],
              itemsTablet: [768,1],
              itemsMobile : [479,1]
          });

        $("#proyectoDispenza").owlCarousel({
              navigation : true, // Show next and prev buttons
              slideSpeed : 500,
              paginationSpeed : 400,
              autoHeight : false,
              items : 1,
              autoPlay : true,
              autoWidth : true,
              itemsDesktop : [1199,1],
              itemsDesktopSmall : [980,1],
              itemsTablet: [768,1],
              itemsMobile : [479,1]
          });

        });

});
