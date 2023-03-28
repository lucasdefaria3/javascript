//on crée un tableau qui contient les nombres pairs de 2 à 10
var evennumbers = [2, 4, 6, 8, 10];

//on définis une fonction qui calculer la somme des nombres du tableau en le parcourant
function calculerSomme(tableau) {
  var somme = 0;
  for (var i = 0; i < tableau.length; i++) {
    somme += tableau[i];
  }
  return("La somme des nombres pairs de 2 à 10 est : " + somme);
}
//on invoque la fonction puis on affiche le résultat dans la console
console.log(calculerSomme(evennumbers));
