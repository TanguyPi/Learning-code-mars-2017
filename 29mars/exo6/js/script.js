
// Créer une fonction qui permet à l'utilisateur de choisir une couleur- On crée une valeur grâce à la fonction

function chooseColor(){

    // quand on appelle la fonction on utilise une variable

    var userPrompt = prompt ('Choisir une couleur entre rouge, vert, bleu');

    // Appeller la fonction de traduction
    translateColor(userPrompt);
 };


    // Créer une fonction pour traduire les couleurs*
    function translateColor(paramColor){

        // Utilisation du switch
        switch(paramColor){
            // 1er cas: paramColor est égale à 'rouge'
            case 'rouge':console.log('Rouge=Red'); break;
            // 2ème cas:paramColor est égale à 'vert'
            case 'vert':console.log('vert=green'); break;
            // 3ème cas: paramColor est égale à 'bleu'
            case 'bleu' :console.log ('bleu=blue'); break;

            // Pour tous les autres cas. (DEFAULT est obligatoire)
            default:console.log("Je ne connais pas cette coueleur"); break;


        }


    };
