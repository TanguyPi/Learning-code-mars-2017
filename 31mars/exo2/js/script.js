// Attendre le chargement du DOM
    $(document).ready(function(){


        // Supprimer la class active de la balise h1
        $('h1').removeClass('active');

        // Ajouter la class active à la balise h2
        $('h2').addClass('active');

        // Ajouter ou supprimer une class sur la balise p lorsqu'on clique sur la balise h2
        $('h2').click(function(){
            $('p').toggleClass('hidden');
        }); 
    


    // fin de la fonction d'attente de chargement DOM
    });