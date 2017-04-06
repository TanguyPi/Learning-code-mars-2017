$(document).ready(function(){
    console.log('Le DOM est chargé');

 
    // Ouvrir la modal
    $('button').click(function(){
        $('section').fadeIn();

    });

    
    // Fermer la modal-On ajoute section pour quand tu cliques dehors la modal s'enlève
    $('.fa,section').click(function(){
         $('section').fadeOut();
        
    });

    // Capter les touches du clavier-Fermer avec echap
    $(document).keyup(function(evt){
       
        console.log(evt.keyCode)

        if(evt.keyCode == 27){
            $('section').fadeOut();

        }
    });




//Fin de la fonction
});