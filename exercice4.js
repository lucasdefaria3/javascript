//on crée un tableau de chaînes de caractères
const mysheet = ["lucas","sebiche","corentin","shayma","guillaume","marine","nicolas","angelo"]

//on crée la fontion "orderinsheet" qui utilise la fonction "sort" pour trier le tableau dans l'ordre alphabetique 
function orderinsheet(sheet) {
    return sheet.sort();
  }

//on invoque la fonction puis renvoie le resultat dans les logs
console.log(orderinsheet(mysheet))