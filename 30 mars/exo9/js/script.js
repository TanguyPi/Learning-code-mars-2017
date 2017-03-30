// Capter l'évenemnt ready pour y ajouer une fonction de callback (attendre le chargement du DOM)
    $(document).ready(function(){

    

        // Capter l'évenement focus sur le textarea
        $('textarea').focus(function(){ 
            console.log('Minimum 10 caractères');

    });

    // Capter l'évenement blur sur le textarea
    $('textarea').blur(function(){
        console.log("L'utilisateur est sorti du focus");

    });

    // Capter l'évenement scroll sur le header
    $('header').scroll (function(){
        console.log('Scroll');
    });

    // Capter l'évenement hover sur le main
    $('main').hover(function(){
        console.log("L'utilisateur est au-dessus du main");
    });




    // Capter l'évenement click sur la balise a + on rajoute evt pour l'évenement( c'est un attribut, on pourrait mettre ce que l'on veut)
    $('a').click(function(evt){


        // Empecher le comportement naturel de la balise a. On empêche que le click sur google fonctionne. La page google ne s'ouvre pas)
        evt.preventDefault();


        console.log('Click sur balise a');

    });



        // Capter la soumission du formulaire
        $('form').submit(function(evt) {

                // Bloquer le comportement naturel du formulaire
                evt.preventDefault();
                console.log('Vérifier les inputs/textarea avant de les envoyer au fichier php');

        });



// fin de la fonction d'attente de chargement du DOM 
});


