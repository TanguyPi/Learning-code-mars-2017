
$(document).ready(function(){

           
           //   Charger la page home.html dans le main
            $('main').load('views/home.html');




        // Burger menu: navigation
        $(' h1  + a').click(function(evt){
            // Bloquer le comportement naturel de la balise a
            evt.preventDefault();

            // Appliquer la fonction slideToggle sur la nav pour que le burger descende et qu'apparraisse le menu
            $('nav').slideToggle();

        });

        // Burger menu: Navigation
          $('nav  a').click(function(evt){
                // Bloquer le comportement naturel de la balise a
            evt.preventDefault()

            var linktoOpen = $(this).attr('href');

            // Fermer le Buger menu
            $('nav').slideUp(function(){

                // Changer de page
                window.location =  linktoOpen;
            });

          });

     

        

        
     






// fin de la fonction de chargement
});