$(document).ready(function(){


    // Code à éxecuter sur la page une fois chargé


    


    // Les sélecteurs Jquery "classiques"
        // Sélectionner une balise par son nom(tag)
        var myHtmlTag = $('header');
        console.log(myHtmlTag);

        // Sélectionner une balise par sa classiques
        var myClass = $('.myClass');
        console.log(myClass);

        // Sélectionner une des balises par son id
        var myId = $ ('myId');
        console.log(myId);

        // Sélecteur imbriqué
        var myItalic = $('h2 i');
        console.log(myItalic);

        // Avec Sélecteur CSS3
        var myFooter = $('body > main + footer');
        console.log(myFooter);




// Les sélecteurs Jquery spécifiques
    // Sélecteurs d'enfants (ici le bouton qui est dans le header)
    var myChildren = $('header').children('button');
    console.log(myChildren);

    // Sélecteur de parent
    var myParent = $('h2').parent();
    console.log(myParent);

    // Trouver une balise
    var myH2 = $('main').find('h2');
    console.log(myH2);

    // Sélectionner le premier bouton (= Btn)
    var firstBtn = $('button:first');
    console.log(firstBtn);

    // Sélectionner le dernier bouton
    var lastBtn = $('button:last');
    console.log(lastBtn);




    // Sélectionner la nth balise (ici la 2ème= 1 sur JS car cela commence à 0)
    var secondLi = $('li').eq(1);
    console.log(secondLi);

    // Sélectionner la balise suivante (après main ici)
    var afterMain = $('main').next();
    console.log(afterMain);

    // Sélectionner la balise précédente
    var beforeMain = $('main').prev();
    console.log(beforeMain);






// Fin de la fonction de chargement du chargement du DOM
});