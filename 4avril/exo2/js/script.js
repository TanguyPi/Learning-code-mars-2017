$(document).ready(function(){
    console.log('Le DOM est chargé');


            // Fonction fadeOut()
                // eq. est un selecteur comme nth. eq(0) car c'est la première. On oeut utiliser les selceteurs css et eq c'est pareil
                // fadeOut pour la vitesse
            $('section').eq(0).children('button').click(function(){
                $('section').eq(0).children('article').fadeOut(500);

            });


             // Fonction fadeIn()
                // eq. est un selecteur comme nth
                // fadeOut pour la vitesse
            $('section').eq(1).children('button').click(function(){
                $('section').eq(1).children('article').fadeIn(500);

            });

            // Fonction fadeToggle()
                // eq. est un selecteur comme nth
                // fadeOut pour la vitesse
            $('section').eq(2).children('button').click(function(){
                $('section').eq(2).children('article').fadeToggle(500);

            });



            // Fonction slideUp()
            $('section').eq(3).children('button').click(function(){
                $('section').eq(3).children('article').slideUp(500);

             });

            

            // Fonction slideDown()
            $('section').eq(4).children('button').click(function(){
                $('section').eq(4).children('article').slideDown(500);

             });

            // Fonction slideToggle()
            $('section').eq(5).children('button').click(function(){
                $('section').eq(5).children('article').slideToggle('slow');

             });
            
            
           





//Fin de la fonction
});