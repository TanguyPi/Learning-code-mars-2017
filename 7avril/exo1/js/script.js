$(document).ready(function(){
    

    // (1) Premier formulaire de connexion (capter le formulaire)

    $('header form').submit(function(){

        // (2) Bloquer le comportement naturel du formulaire
         evt.preventDefault();

        //(3) Déclarer les variables du premier formulaire
            var UserMail = $('#UserName');
            var UserPassword = $('#UserPassword');
            // (6-1) Ajouter le formscore pour qu'il valide le formulaire
            var formScore = 0;

        //(4) Vérifier que UserEmail à au moins 5 caractères
        if(UserEmail.val().length < 5){ 
           $('[for="UserMail"]').text('Tu dois au moins afficher 5 caractères !');
    
         }else{
             console.log('Génial!');
            // (6-2) Incrémenter
            formScore++
         };

        //(5) Vérifier que UserPassword = plus de 0 caractère
        if(UserPassword.val() == 0 ){
            $('[for="UserPassword"]').text(' Dont forget to write your password!');

        }else{
            console.log('Cimer Albert !');
            // (6-2)Incrémenter
            formScore++

        };

        // (6-3) Validation du formulaire
        if('formScore' == 2){ 
            console.log('le formulaire est bien rempli!');
                
                // Vider le champ du formulaire
                $('header form')[0].reset();

                // Supprimer message d'erreur
                $('header form').text('');

   




                // Capter le second formulaire
              $('main form').submit(function(evt){
                  

                //   Déclarer les variables
                var UserName = $('#UserName');
                var Familyname = $('#Familyname');
                var UserPhone = $('#Userphone');
                var ConfirmPhone = $('#ConfirPhone');
                var userBirthday = $('#UserBirthday');
                var userMonth = $('#UserMonth');
                var userYear = $('#UserYear');
                var radio= $('[type="radio"]');

                // Vérifier que usermail à au moins 2 caractères
                if('#userName'.val().length < 2 ){
                    $('[for="radio"]').text ('Vous devez rentrer au moins 2 caractères');
                
                 }else{
                    console.log('Merci + [var UserName]');
                
                };

                //Vérifier que l'utilisateur choisisse la checkbox
                if(radio[0] == false){
                    $('var radio').text ('Vous devez sélectionner votre genre !');

                }else{ 
                    console.log('Vous avez selectioné votre genre !');

          })




         }



    })

      
     
    

      












// fin de la fonction principale
});