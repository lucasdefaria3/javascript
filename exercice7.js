//on crée un tableau de nombres
const mysheet = ["3","2","0","7","9","8","5","6","4","1","23","7.4"]

//on crée la fontion "reversedsort" qui utilise la fonction "sort" pour trier le tableau dans l'ordre croissant 

function reversedsort(sheet) {
    return sheet.sort(function(a, b) {
      return b - a;
    });
  }

//on invoque la fonction puis renvoie le resultat dans les logs
console.log(reversedsort(mysheet))

