//on créer un tableau contenant les noms des mois de l'année
var mysheet = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

//on définis une fonction qui affiche le troisième élément du tableau
function showthirdelement(sheet) {
  return(sheet[2]);
}

//on invoque la fonction puis on affiche le résultat dans la console
console.log(showthirdelement(mysheet));
