//on crée un tableau contenant des phrases
var mysheet = ["Bonjour à tous", "Comment ça va ?", "J'aime bien les pommes", "Je suis content de te voir", "C'est une belle journée aujourd'hui"];

//on définis une fonction qui trouve la phrase la plus longue
function findlongestsentance(sheet) {
  var longestsentance = "";
  for (var i = 0; i < sheet.length; i++) {
    if (sheet[i].length > longestsentance.length) {
      longestsentance = sheet[i];
    }
  }
  return("La phrase la plus longue est : " + longestsentance);
}

//on invoque la fonction puis on affiche le résultat dans la console
console.log(findlongestsentance(mysheet));
