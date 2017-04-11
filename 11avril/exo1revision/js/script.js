$(document).ready(function(){
    
      
        //(5)Vérifier quelle checkbox est cochée 
                // On définie une variable pour commencer
        var boxChecked;
      

    // (4)Utilisateur peut cocher qu'une case
    $('[type="checkbox"]').click(function(){


                 //(5-1)On définie la valeur de boxChecked
                 boxChecked = $(this).val();

                 

        // console.log($(this)[0].checked);
        var checkboxArray = $('[type="checkbox"]').not($(this));

        for (var i =0; i < checkboxArray.length; i++){
            console.log(checkboxArray[i]);

        // Décocher les checkbox
            checkboxArray[i].checked = false;
        };
        
        // Modifier les images en fonction de la case cochée
        if($(this).val() == 'first'){
            $('img').attr('src', 'img/cuisine-1.jpg');
            

        }else if($(this).val() == 'second' ){
            $('img').attr('src', 'img/cuisine-2.jpg');
            

        }else if($(this).val() == 'third' ){
            $('img').attr('src', 'img/cuisine-3.jpg');
            
            

        }else{ 
            $('img').attr('src', 'img/cuisine-4.jpeg');

         }

    });
    
    // (1)capter la soumission du formulaire
    $('form').submit(function(evt){

        // (2)Bloquer le comportement par défaut du form
        evt.preventDefault();


        //(5-2)Vérifier quelle checkbox est cochée 
        if(boxChecked == undefined){
            console.log('Vous devez afficher une image');
        }else{
            // (6)Afficher la modal
            $('#modal').fadeIn();
        };

        
        // (7) Vider le formulaire


        // (3)Savoir quelle checkbox est sélectionnée
        // var firstCheckbox = $('[value="first"]');
       
        




    })








// Fin de la fonction
});