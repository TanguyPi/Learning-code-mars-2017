// Attendre le chargement du DOM
$(document).ready(function(){

    
    // Pas oublier de faire console.log avant
    
    // Manipuler le contenu text du footer(On enlève le gras- sélection + .text + nouveau texte)
    console.log($('footer').text());
    $('footer').text('Sous la licence MIT');

    // Manipuler le contenu HTML
    console.log($('footer').html());
    $('footer').html('Sous la licence <b>MIT</b>');


    // Créer un objet pour la page d'acceuil
    var homeContent = {
        title: 'Bienvenue sur mon site',
        content: 'Je suis le texte de la page <b>acceuil</b>'
    }

     var portfolioContent = {
        title: 'Bienvenue sur mon site',
        content: 'Je suis le texte de la page <b>portfolio<b/>'
    }

    var contactContent = {
        title: 'Bienvenue sur mon site',
        content: 'Je suis le texte de la page <b>Contact<b/>'
    }
    
    
    // Capter le click sur la première licence
    $('li:first').click(function(){
     
            // Modifier le contenu de la balise h2
            $('h2').text(homeContent.title);

            // Modifier le contenu de la balise page
            $('p').html(homeContent.content);

            
    // Si on veut faire la même chose pour les 2 autres li on peut faire du copier-coller ou une fonction voir plus tard



    });

    



// Fin de la fonction chargement du DOM
});