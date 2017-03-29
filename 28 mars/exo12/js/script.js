// Créer une variable de type objet / On utiliser {} pour les objets

    var user= {
        firstName: 'Tanguy',
        lastName: 'jojo',

        // Ajouter une fonction pour afficher le nom complet
        fullName: function(){
            console.log(this.firstName + ' ' + this.lastName);
        }

    };

    // Afficher l'objet
    console.log(user);

    // Afficher une propriété de l'objet: le prénom ici
    console.log(user.firstName);

    // Modifier la valeur d'une propriété de l'objet
    user.lastName='Marley';
    console.log(user);

    // Appeller la fonction de l'objet
    console.log(user.fullName() );