$(document).ready(function(){
    console.log('Le DOM est chargé');

        
        // Ouvrir Burger menu classique
        $('.fa-bars').click(function(){
            $('nav ul').fadeIn(500);

    });

        // Fermer le Burger menu 
        $('a').click(function(evt){
            // Pour pas qu'il ouvre la page sur laquelle je clique
            evt.preventDefault();
            $('nav ul').fadeOut(500);

     });
        
        

   

//Fin de la fonction
});