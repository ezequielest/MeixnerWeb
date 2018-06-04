var ancho = $( window ).width();

if (ancho < 800){
                    jQuery('#brand img')
                        .css({  'width':'220px','height':'20px',
                                '-webkit-transition':'all 0.5s ease',
                                '-moz-transition':'all 0.5s ease',
                                '-ms-transition':'all 0.5s ease',
                                '-o-transition':'all 0.5s ease',
                                'transition':'all 0.5s ease'})

                        .attr('src','img/logos/meixnergroup-n-220x20.png');
}

jQuery(function(){
    jQuery(window).scroll(function(){
        if(jQuery(this).scrollTop() > 150) {

            jQuery('#brand img')
                .css({  'width':'220px','height':'20px','marginTop' : '0px',
                        '-webkit-transition':'all 0.5s ease',
                        '-moz-transition':'all 0.5s ease',
                        '-ms-transition':'all 0.5s ease',
                        '-o-transition':'all 0.5s ease',
                        'transition':'all 0.5s ease'})

                .attr('src','img/logos/meixnergroup-n-220x20.png');



        } else {
            if (ancho < 800){
                    jQuery('#brand img')
                        .css({  'width':'220px','height':'20px',
                                '-webkit-transition':'all 0.5s ease',
                                '-moz-transition':'all 0.5s ease',
                                '-ms-transition':'all 0.5s ease',
                                '-o-transition':'all 0.5s ease',
                                'transition':'all 0.5s ease'})

                        .attr('src','img/logos/meixnergroup-n-220x20.png');

            } else{
                        jQuery('#brand img')
                            .css({  'width':'550px','height':'50px',
                                    '-webkit-transition':'all 0.5s ease',
                                    '-moz-transition':'all 0.5s ease',
                                    '-ms-transition':'all 0.5s ease',
                                    '-o-transition':'all 0.5s ease',
                                    'transition':'all 0.5s ease'
                                })


                            .attr('src','img/logos/meixnergroup-n-550x50.png');

                        jQuery('.container.logo')
                             .css({'width':'550px'});   

            }

        }
  
       
    });
});