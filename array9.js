// Créer un tableau contenant des nombres aléatoires
var nombres = [8, 2, 7, 5, 1, 10, 3, 6, 4, 9];

// Définir une fonction qui calcule et affiche la valeur minimale et la valeur maximale du tableau
function calculerMinMax(tableau) {
  var min = Math.min.apply(null, tableau);
  var max = Math.max.apply(null, tableau);
  return("La valeur minimale est : " + min + ", La valeur maximale est : " + max);
}

//on invoque la fonction puis on affiche le résultat dans la console
console.log(calculerMinMax(nombres));
