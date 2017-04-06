// Créer un tableau contenant 4 prénoms
// Faire une boucle dans le tableau pour saluer dans la console chacun des prénoms

// Afficher un message spécial pour votre prénom (Salut c'est moi)

var myArray = [' Léo ',' Thomas' ,' Lola' , ' Tanguy '];
for(var i = 0; i < myArray.length; i++){
    

    if(myArray[i] == ' Tanguy '){
      console.log (" Salut c'est moi ");

    //   Modifier une balise HTML: .textContent sert à modifier le texte. 
    document.querySelector('p').textContent = " Salut c'est moi ";
        
     }else{
         console.log( ' Salut ' + myArray[i]);
     }

    };


