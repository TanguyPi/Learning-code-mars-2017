        var Number = 45;

        // Egalité simple (==): vérifier la valeur de la variable ( true or false voir dans la console). '' = string
        console.log(Number==45); 
        console.log(Number=='45');

        // Inégalité simple(!=) signifie inégale donc faux car la valeur vaut bien 45. '' = string
        console.log(Number != 45);
        console.log(Number != '45');
        // Ici cela va être vrai car la valeur n'est pas égale à 12
        console.log(Number != 12);
        console.log(Number != '12');


        // Egalité strict (===) : vérifier la valeur et le type de la variable. La seconde est fausse. '' = string
        console.log(Number === 45);
        console.log(Number === '45');  

        // Inégalité strict (!==) : vérifier la valeur et le type de la variable. '' = string
        console.log(Number !== 45);
        console.log(Number !== '45');

        // Supérieur/inférieur (>)
        console.log(Number>46);
        console.log(Number<33);

        // Supérieur ou égale / inférieur ou égale
        console.log(Number>=12);
        console.log(Number<=20);
               
