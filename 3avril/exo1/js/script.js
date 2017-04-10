// Chargement du DOM
$(document).ready(function(){
    

    // Créer un tableau pour enregistrer les données des utilisateurs en bas du site ''statistiques de votre ville''
    var myTown = {}



        // Vérifier le genre de l'avatarAge
        var avatarWoman = $('#avatarWoman').val();
        var avatarMan = $('#avatarMan').val();
        // On crée une variable vide pour insérer dans la console le sexe et indiquer quand qqun n'a pas choisi son sexe
        var avatarGender; 

       // Avatar capter le click quand qqun click sur femme ou sur homme (on le sort du formulaire(form) car on ne veut pas appuyer sur le submit pour stipuler son genre)
        avatarWoman.click(function(){    

        avatarMan.click(function(){
          

        //   désactiver avatarWoman quand on clique sur homme et vise versa
        avatarWoman.prop('checked',false);

        avatarMan.prop('checked', false);

      });

        // Modifier la valeur de avatarGender
        avatarGender = avatarWoman.val();

          avatarGender = avatarMan.val();

        
        // Vider le message d'erreur pour les femmes ( cas spécifiques ici pas de label)
        $('.labelGender b').text('');
    

        // Modifier l'attribut src de #avatarBody (photo de fille et de mec qui change en fonction du choix de l'utilisateur. )
        $('#avatarBody').attr('src' + 'img/' + avatarGender + '.png')
         });

        // Supprimer les messages d'erreurs quand on clique sur l'endroit ou on va écrire
        $('input,select').focus(function(){
                // Sélectionner la balise précédente le input (les labels donc et on va utliser les balsies b qu'on a mise)
                $(this).prev().children('b').text('');

    
                 });

        // Capter l'événement change() sur les selects
        $('select').change(function(){
            console.log(($this).attr('id'), 'change :' + $(this).val());

            // Condition if pour modifier la valeur src de avatarBottom
            if($(this).attr('id') == 'avatarStyleTop'){
                console.log('modification du style top');

                // Modifier la valeur de l'attribut src de #avatarTop
                $('#avatarTop').attr('src','img/top' + $(this).val() +'.png');

            }else{
                $('#avatarBottom').attr('src','img/bottom' + $(this).val() +'.png');

            };

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
                // Envoyer les données du formulaire et attendre la réponse du serveur en Ajax
                // Le serveur répond true

                // Ajouter une ligne dans le tableau html en bas du site
                $('table').append('' +
                    '<tr>'+
                    '<td><b>' + avatarName + '</b></td>'+
                    '<td>' + avatarAge + 'an(s)</td>'+
                    '<td>' + avatarGender +'</td>'+
                    '<td>' + avatarStyleTop +'</td>'+
                '</tr>'
                );


                // Ajouter l'avatar du formulaire dans le tableau(c'est un tableau objet) JS
                myTown.push({
                    name: avatarName,
                    gender:avatarGender,
                    age:parseInt(avatarAge),
                    top:avatarStyleTop,
                    bottom:avatarStyleBottom,
                    
                });
                
               
               
                // Vider les champs du formulaire au moment ou l'utilisateur clique sur valider afin que l'utilisateur sache que son formulaire est validé
                $('form')[0].reset();

                // Revenir aux valeurs 'null' pour l'avatar cad le mecn'aura pas dhabit sur lui
                $('#avatarBody').attr('src', 'img/null.png');
                $('#avatarBottom').attr('src', 'img/bottom/null.png');
                $('#avatarTop').attr('src', 'img/top/null.png');



                // Afficher les données du tableau dans la console
                console.log(myTown.length);
                        // Afficher la taille totale de la ville dans #totalSims
                        $('#totalSims');
                        $('#simsWoman b, simsMan b').text('/' + myTown.length);


                        // définir les variables globales pour le statistiques
                        var totalGirls= 0;
                        var totalBoys=0;
                        var totalAge=0;

                        // Faire une boucle for sur myTown pour connaitre les statistiques
                        for(var i=0;i<myTown.length; i++){
                            console.log(myTown[i].gender);

                            // Condition pour le gender (totalgirls++ car ++= 1)
                            if(myTown[i].gender=='girl'){
                                totalGirls++;

                            }else{
                                totalBoys++;
                            }
  
                            // Additionner les ages
                            totalAge += totalAge + myTown[i].age

                        };
                        // Afficher dans le tableau html le nombre de girls et le nombre de boys
                        $('#simsWoman').html(totalGirls) + '<b>/' + myTown.length +'</b');
                        $('#simsMan').html(totalBoys) + '<b>/' + myTown.length +'</b');

                        // Afficher l'age total dans la console
                       var ageAmountRounded = Math.round(totalAge/myTown.length);
                       $('simsAgeAmount').html(ageAmountRounded + '<b>/ans</b>');

                          };
               
  });


     



       

    

    // Fin de la fonction d'attente de chargement du DOM
    });

