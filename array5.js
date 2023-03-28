//on crée un tableau contenant les nottes de cinq élèves
const mysheet = [14, 17, 12, 15, 13];

//on définis la fonction "calculatemedium" qui calcule la moyenne de toues les notes
function calculatemedium(sheet) {
  var sum = 0;
  for (var i = 0; i < sheet.length; i++) {
    sum += sheet[i];
  }
  var moyenne = sum / sheet.length;
  return ("La moyenne des notes est : " + moyenne);
}

//on invoque la fonction puis on affiche le résultat dans la console
console.log(calculatemedium(mysheet));