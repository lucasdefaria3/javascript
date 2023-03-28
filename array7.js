//on crée un tableau contenant des noms de pays
var mysheet = ['France', 'Espagne', 'Italie', 'Portugal', 'Allemagne'];

//on définis une fonction qui trie le tableau par ordre alphabétique
function sortalphabetically(sheet) {
  sheet.sort();
  return(sheet);
}

//on invoque la fonction puis on affiche le résultat dans la console
console.log(sortalphabetically(mysheet));
