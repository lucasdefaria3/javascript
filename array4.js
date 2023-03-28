//on crée un tableau contenant les noms de cinq fruits
const mysheet = ['pomme','banane','kiwi','mangue','ananas'];

//on définis la fonction "addafruit" qui ajoute un fruit au tableau
function addafruit(sheet, fruitname) {
  sheet.push(fruitname);
  return sheet
}

//on invoque la fonction puis on affiche le résultat dans la console
console.log(addafruit(mysheet, "orange"));
