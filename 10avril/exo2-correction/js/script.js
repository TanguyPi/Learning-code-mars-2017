$(document).ready(function(){
    
    
    
    // (12)Fermeture de la modal
    $('.fa-times').click(function(){
        $('div').fadeOut();
    })

    // (15)Supprimer les class error
    $('input, select, textarea').focus(function(){  
        $(this).removeClass('error');
    
    })
    
    // (1) Capter la soumission du formulaire (pas dans une fonction car tous est dans la page html. sinon on aurait créer une fonction)
    $('form').submit(function(evt){
            // (2)Bloquer le comportement du formulaire
            evt.preventDefault();
            
            // (3)Définir les variables globales
            var userName =  $('[placeholder= "Your name"]');
            var userEmail =  $('[placeholder= "Your email"]');
            var userSubject = $('select');
            var userMessage =  $('textarea');

            // (8)Pour valider le formulaire
            var formScore=0;

            // (4)Vérifier que l'utlisateur a bien saisi son nom (on prend la valeur ici car il tape). = 0 signifie qu'il tape au moins une lettre
            if(userName.val().length == 0){

                // (14)Ajouter la class erorr sur l'input (quand formulaire pas rempli entièremment)
                userName.addClass('error');

            }else{
               formScore++;
                
            };
    
            // (5)Vérifier que l'utilisateur a bien saisi au moins 4 caractères
            if(userEmail.val().length < 4){
                

                 userEmail.addClass('error');
            }else{
               formScore++;
            };

            // (6)Vérifier que l'utilisateur a bien choisi un sujet
            if(userSubject.val() =='null'){
                
                 userSubject.addClass('error');

             }else{ 
                 formScore++;
             };
            
            // (7)Au moins 5 caractères au userMessage
            if(userMessage.val().length < 5 ){
                
                 userMessage.addClass('error');

            }else{
                formScore++;
            };


            // (9)Validation du formulaire
            if(formScore == 4 ){
                console.log('Formulaire est ok !')
         

                    // envoie des données dans le fichier php
                    // PHP répond true ==> continuer le traitement du formulaire (on fait une simulation ici)

                    // (10)afficher les données du formulaire dans une modal-voir html + css de la modal
                    $('div span').text(userName.val() );
                    $('div b').text(userSubject.val() );
                    $('div p:last').text(userMessage.val());

                    // (11)Afficher la modal
                    $('div').fadeIn();

                       // (13)Vider le formulaire
                        $('form')[0].reset();
          };


    });





// Fin de la fonction
});