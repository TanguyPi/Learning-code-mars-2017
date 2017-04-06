// Demander à l'utilisateur de choisir une couleur entre rouge, vert et bleu

var userColor = prompt('Choisir une couleur entre rouge, vert ou bleu');

// Si userColor est égale à 'rouge'
if (userColor == 'rouge') {
console.log('rouge ce dit red en anglais');

// On écrit sur la même ligne une autre formule.
} else if (userColor=='blue') {
console.log('bleu ce dit blue en anglais');

} else if (userColor == 'vert') {
console.log('vert se dit green en anglais');

// Si on demande d'autre couleur autre que celle du dessus, l'ordinateur ne les reconnaitra pas. 
} else{
console.log('Je ne connais pas cette couleur');
}

