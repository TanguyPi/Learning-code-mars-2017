$(document).ready(function(){
    console.log('Le DOM est chargé');

        $('h3').click(function(){
           
           

            // Fermer la balise suivant .open. On utilise .not (this) pour que celle cliquée se ferme
            // sélectionne moi la class open sauf sur cele que j'ai cliqué puis celle suivante pour faire un slideup puis la précédente et supprimer la classe open et prendre l'enfant et supprimer l'icone fleche pour l'icone croix
            // .prev= précédente
            $('.open').not(this).next().slideUp().prev().removeClass('open').children('fa').toggleClass('fa-arrow-right').toggleClass('fa-times');
            
            // Faire un toogle de la class open sur la balise h3
            $(this).toggleClass('open');
           
            // Faire un slide Toggle sur la balise suivante (possibilité de voir la balise p en cliquant)
            $(this).next().slideToggle();
    
            // Sélectionner la balise .fa pour supprimer la class .fa-arrow-right (On utilise this car on clique deçu) y ajouter le logo fa-times
            $(this).children('.fa').toggleClass('fa-arrow-right').toggleClass('fa-times');
            


      });   


//Fin de la fonction
});