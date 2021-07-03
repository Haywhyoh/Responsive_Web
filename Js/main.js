jQuery(document).ready(function(){
    'use strict'
    $('.slider').ripples({
        dropRadius: 15,
        perturbance: 0.01,
    });

    $('.text').typed({
        strings:['FRONT-END DEVELOPMENT', 'UI/UX DESIGN', 'WORDPRESS'],
        typespeed:0.5,
        loop:true
    })

    $(window).scroll(function(){
        var top =$(window).scrollTop();
        if(top>=60){
            $('nav').addClass('secondary');
        }

        else
            if($('nav').hasclass('secondary')){
                $('nav').removeclass('secondary');
            }
    })
})