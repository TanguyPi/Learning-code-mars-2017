$(document).ready(function(){
  

    // Capter le formualaire
    $('form').submit(function(evt){
        
        // Bloquer le comprotement anturel du formulaire
        evt.preventDefault();


        // définir variable pour validation finale
        formScore = 0;

        // Déclarer les variables du form
        var UserName = $('#UserName')
        var UserFamilyName = $('#UserFamilyName')
        var Gender = $('#UserGender')
        var UserMessage = $('#UserMessage'

    

        // Vérifier que UserName à au moins 5 caractères
        if(UserName.length < 2){
            $('[for="UserName"]').text('Minimum 2 caractères');

        }else{
            console.log('Merci !');
            formscore++;
        };



        if(UserFamilyName.length < 2){
            $('[for="UserFamilyName"]').text('Minimum 2 caractères');

        }else{
            console.log('Merci !');
            formscore++;
        };



        if(UserGender == 'null'){
            console.log('Vous devez choisir votre genre');

        }else{   
            $('[for="UserGender"]')('Choix obligatoire');
            formscore++;
        };




        if(UserMessage.val().length < 9){
            $('[for="UserMessage"]').textarea('Minimum 9 caractères');

        }else{
            console.log('Message bien rempli !');
            formscore++;
        };




        //  Validation du  formualaire
        if(formScore == 4 ){

        
        // Ajouter un commentaire après la validation du formulaire
        
           
    
        // Vide le formulaire
        $('form')[0].reset();

        






        };




 });


// Fin de la fonction
});