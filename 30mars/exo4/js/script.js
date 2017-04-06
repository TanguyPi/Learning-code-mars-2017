// Sélectionner la balise h1;
var myTitle = document.querySelector ('h1');
// Afficher le contenu de la balise dans la console
console.log(myTitle.textContent);

// Modifier le contenu du texte de la balise
myTitle.textContent = 'Le titre a changé';

// Selectionner la balise myId
var MyId= document.querySelector ('#MyId');
// Afficher le contenu de la balise dans la console
console.log(MyId.innerHTML);

// Modifier le contenu HTML de la balise(On utilise innerHTML car on veut modifier le html donc on est obligé)
myId.innerHTML = 'Contactez <b>moi</b> les gars';

