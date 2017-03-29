var first= 20;
var second = 20;
var third= 10;

// "et" logique (Est-ce que first et second sont chacun égal à 20?)
console.log (first && second == 20);
console.log (first == 10 && third == 10);

// ou logique: vérifier qu'une des variables à la bonne valeur. (||= ou) (C'est vrai ici car first est égale à 20 même si ce n'est pas le cas au final)
console.log(first == 20 || second ==15);
console.log(first==30 || first >= 20);