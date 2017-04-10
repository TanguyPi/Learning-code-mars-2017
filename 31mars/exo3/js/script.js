// Attendre le chargement du DOM
$(document).ready(function(){

  
    // Capter la soumission du formulaire
    $('form').submit(function(evt){


            // Définir une variable pour le score du formulaire
            var formScore= 0;



            // Bloquer le comportement naturel du formulaire
            evt.preventDefault();

           
            // Connaitre la valeur saisie dans le input par l'utilisateur
            var userName = $('input').val();
            console.log(userName);

            // Connaitre le nombre de caractère dans la valeur
            console.log (userName.length);

            // Connaitre la valeur saisie dans le textarea par l'utilisateur
            var userMessage = $('textarea').val();
            // Connaitre le nombre de caractères dans la valeur
            console.log(userMessage.length);

            // Vérifier la taille de userName (min.5 caractères)
            if(userName.length == 0 ){

                // Afficher un message dans le label
                $('[for="userName"] b').text('Champ obligatoire');

            }else{
                console.log('userName OK');
            };

            // Vérifier la taille de userMessage (min.5 caractères)
            if(userMessage.length <4){
                console.log('Minimum 5 caractères');

            }else{
                console.log('userMessage Ok');
                // Incrémenter formscore cad que si tu remplies cela fait des points
                formScore++;
        };

               
                // Vérifier la valeur de formScore pour valider le formulaire
                if(formScore == 2){
                    console.log('Le formulaire est validé');
                    
                        // Ajouter un message dans les commentaires
                        $('section:last').append('<article><h4>' + userMessage + '</h4><p>' +userName + '</p></article>');
                     

                         // Normalement, la on l'envoie vers le PHP (true/false)
                        // si le PHP dit true
                        // Il faut vider le champ du formulaire afin que l'utilisateur soit sur qu'il ait été envoyé
                        $('input:not([type="submit"]').val('');
                        $('textarea').val('');

                // Supprimer les messages d'erreur ( message qui aide l'utilisateur)
                $('input,textarea').focus(function(){ 
                        $(this).prev().children('b').text('');
                });

       };
    });

        
        

            









    });











// Fin de la fonction d'attente de chargement DOM
});