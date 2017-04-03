// Chargement du DOM
$(document).ready(function(){
    console.log('Dom chargé')



        // Vérifier le genre de l'avatarAge
        var avatarWoman = $('#avatarWoman').val();
        var avatarMan = $('#avatarMan').val();
        // On crée une variable vide pour insérer dans la console le sexe et indiquer quand qqun n'a pas choisi son sexe
        var avatarGender; 

       // Avatar capter le click quand qqun click sur femme ou sur homme (on le sort du formulaire(form) car on ne veut pas appuyer sur le submit pour stipuler son genre)
        avatarWoman.click(function(){
                console.log('Je suis une' + avatarWoman.val());
              });   

        avatarMan.click(function(){
            console.log('Je suis un' + avatarMan.val());
   

        //   désactiver avatarWoman quand on clique sur homme et vise versa
        avatarWoman.prop('checked',false);

        avatarMan.prop('checked', false);

      });

        // Modifier la valeur de avatarGender
        avatarGender = avatarWoman.val();

          avatarGender = avatarMan.val();

        
        // Vider le message d'erreur pour les femmes ( cas spécifiques ici pas de label)
        $('.labelGender b').text('');
        });




        // Supprimer les messages d'erreurs quand on clique sur l'endroit ou on va écrire
        $('input,select').focus(function(){
                // Sélectionner la balise précédente le input (les labels donc et on va utliser les balsies b qu'on a mise)
                $(this).prev().children('b').text('');

        });

        



    // Capter la soumission du formulaire
    $('form').submit(function(evt){

        // Bloquer le comportement par défaut du formulaire
        evt.preventDefault();

        //  Définir une variable pour la validation finale du formulaire
        var formScore = 0;


        // Récupérer la valeur de #avatarName
        var avatarName= $ ('#avatarName').val();
        var avatarAge = $('#avatarAge').val();

        var avatarStyleTop = $('#avatarStyleTop').val();
        var avatarStyleBottom = $('#avatarStyleBottom').val();

        
        

            // Vérifier les champs du formulaire
                // Avatar name minimum 5 caractères
                if (avatarName.length < 4 ){
                   

            // Ajouter un message d'erreur dans le label du dessus(Nom)
            $('[for="avatarName"] b').text('Minimum 5 caractères');

                }else{
                
                // Incrémenter la variable formScore
                formScore++;
                };

                // Avatar age entre 1 et 100
                if(avatarAge == 0 || AvatarAge > 100 || avatarAge.length == 0){
                console.log('avatarAge entre 1 et 100 ans');

                // Ajouter un message d'erreur dans le label du dessus(age)
                 $('[for="avatarAge"] b').text('Entre 1 et 100ans');

                } else{

                formScore++;
                };
               
            //    Avatar StyleTop obligatoire
            if(avatarStyleTop == 'null'){
                console.log('Vous devez choisir un avatarStyleTop');

            // Ajouter un message d'erreur dans le label style
            }else{
                $('[for="avatarStyleTop"] b').text('Choix obligatoire');
            };

            if(avatarStyleBottom == 'null'){
                console.log('Vous devez choisir un avatarStyleBottom')

            // Ajouter un message d'erreur dans le label style
            }else{
                $('[for="avatarStyleBottom"] b').text('Choix obligatoire');
            };
            
            //  On incrémente partout dans le formulaire
             formScore++;
           
            // AvatarGender: vérifier la valeur
            if(avatarGender == undefined ){ 
                    console.log('Vous devez choisir un genre');
            } else{
                 $('[for="avatarGender"] b').text('Choix obligatoire');

            //  On incrémente partout dans le formulaire
             formScore++;
            };
       


            // Vérifier la valeur de la variable (permet d'avoir le nombre de champ rempli. 5 en l'espèce) et valider le formulaire. 
            console.log(formscore);{ 
            console.log('Le formulaire est validé !');
        };
                // Envoyer les données du formulaire et attendre la réponse du serveur
                // Le serveur répond true

                // Vider les champs du formulaire au moment ou l'utilisateur clique sur valider afin que l'utilisateur sache que son formulaire est validé
                $('form')[0].reset();



     



       

    

    // Fin de la fonction d'attente de chargement du DOM
    });

