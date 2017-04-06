//Le selecteur de balise HTML (tag)
var myParaTag = document.getElementsByTagName('p');
console.log(myParaTag);

// Selectionner les class
var myClass = document.getElementsByClassName('myClass');
console.log(myClass);

// Sélecteur d'id
var myId = document.getElementById('myId');
console.log(myId);

// Sélecteur querySelector (dans la parenthèse ('p')c'est du selecteur css! donc possiblité d'utiliser tout le css)
console.log (document.querySelector('p'));

// Sélecteur querySelectorAll
console.log(document.querySelectorAll('.myClass'));