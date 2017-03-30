
// Sélectionner la balise dans laquelle ajouter une autre balise
var myMain = document.querySelector ('main');


// Créer un tableau contenant 4 titres
var myArray = ['About', 'Portofolio', 'Accueil', 'Contacts']
// faire une boucle for
for(var i = 0; i < myArray.length; i++){

// Créer une variable pour générer une balise html
var myNewTag = document.createElement('h2');

// Ajouter du contenu dans la balise générée
myNewTag.innerHTML = myArray[i];

// Ajouter un enfant dans myMain
myMain.appendChild(myNewTag);

}