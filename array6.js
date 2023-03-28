//on crée un tableau contenant des noms d'oiseaux
var mysheet = ['aigle', 'faucon', 'hibou', 'corbeau', 'pigeon'];

//on définir une fonction qui recherche un nom d'oiseau dans le tableau
function searchbird(sheet, birdname) {
  if (sheet.indexOf(birdname) !== -1) {
    return(birdname + " est présent dans le tableau.");
  } 
  else {
    return(birdname + " n'est pas présent dans le tableau.");
  }
}

//on invoque la fonction puis on affiche le résultat dans la console
console.log(searchbird(mysheet, 'hibou'));
