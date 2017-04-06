//  Créer une application pour calculer une moyenne

        // L'utilisateur a la possibilité d'ajouter autant d enotes qu'il le souhaite
        // Lorsqu'il le souhaite, il peut calculer la moyenne des notes 

// Pour commencer créer les variables globales
var notesArray=[]; //=> tableau vide
var notesAmount = 0;

// Fonction
function addNote(){
    //  Demande à l'utilisateur d'ajouter une note
    var newNote = prompt ('Ajouter une note de 0 à 20');

    // Convertir newNote en variable de type number
    var newNoteNumber = parseInt(newNote);


    // Ajouter la note dans le tableau
    notesArray.push(+newNoteNumber);
    console.log(notesArray);

    // Additionner notesAmount et newNote
    notesAmount += +newNoteNumber;
    console.log(notesAmount);
};

// Calculer la moyenne
function average(){
    console.log(notesAmount/notesArray.length);
}



