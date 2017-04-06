    // Créer un type d'objet pour en faire des déclinaisons
    function CarType(paramDoors,paramColor,paramBrand,paramGear){
        // des portes, une couleur, marque, boite de vitesse
        this.doors=paramDoors;
        this.color=paramColor;
        this.brand=paramBrand;
        this.gear=paramGear;
    };


    // Ajouter une fonction au type d'objet
    CarType.prototype.welcome = function(){
        console.log(' Bonjour je suis une '  + this.brand+ ' je possède ' + this.doors + ' portes et ' + this.gear + ' vitesses et je suis de couleur ' + this.color);

    };

    // Créer une déclinaison nde CarType
    var fiat =  new CarType(3,'rouge','fiat', '5');
    console.log(fiat);
    // Appeller la fonction
    fiat.welcome();

    var hummer = new CarType (5,'noir','boloss',8);
    console.log(hummer);
    // Appeller la fonction
    hummer.welcome();
    
    