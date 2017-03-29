   
   var user = 'Tanguy P';
   
    // Créer une variable tableau /On met des crochets quand on parle d'un tableau
    var myArray = ['Texte', 1979, true, user ];
    // Afficher le tableau dans la console
    console.log(myArray); 

    // Afficher la taille du tableau (nombre d'index)
    console.log('La taille du tableau est: ' + myArray.length);

    // Afficher un des index du tableau en l'occurence le texte ici
    console.log(myArray[0]);

    // Ajouter un index dans le tableau (On utilise PUSH)
    myArray.push( 'Une valeur en plus' );
    console.log(myArray);

    // Supprimer et remplacer des index du tableau (commande SPLICE)
    myArray.splice(2,1,false);
    console.log(myArray);