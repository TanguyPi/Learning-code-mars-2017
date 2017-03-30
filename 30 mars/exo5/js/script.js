// Selectionner la balise h1
var myTitle = document.querySelector ('h1');

// Ajouter une class à la balise h1
myTitle.classList.add('error');

// selectionner la dernière balise p
var myLastP= document.querySelector ('p:last-of-type');
// Supprimer la class hidden qui est dans la dernière balise p 
myLastP.classList.remove('hidden');

// selectionner la balise button
var myButton = document.querySelector ('button');


// Selectionner la première balise h2
var myFirstH2 = document.querySelector ('h2');


// Capter le clique sur le boutton
myButton.onclick = function(){
  
    // Ajouter ou supprimer la class move sur la première balise h2
    myFirstH2.classList.toggle('move')

};