
// Créer une fonction qui permet à l'utilisateur de choisir une couleur- On crée une valeur grâce à la fonction

function chooseColor(){

    // quand on appelle la fonction on utilise une variable

    var userPrompt = prompt ('Choisir une couleur entre rouge, vert, bleu');

    // Appeller la fonction de traduction
    translateColor(userPrompt);
 };


    // Créer une fonction pour traduire les couleurs*
    function translateColor(paramColor){
    
    // Si userColor est égale à 'rouge'
    if (paramColor == 'rouge') {
    console.log('rouge ce dit red en anglais');

    // On écrit sur la même ligne une autre formule.
    } else if (paramColor=='blue') {
    console.log('bleu ce dit blue en anglais');

    } else if (paramColor == 'vert') {
    console.log('vert se dit green en anglais');

    // Si on demande d'autre couleur autre que celle du dessus, l'ordinateur ne les reconnaitra pas. 
    } else{
    console.log('Je ne connais pas cette couleur');

    // S'il ne connait pas la fonction on rapelle la fonction pour refaire choisir une couleur
    chooseColor();
    };

    };
