//on crée un tableau de nombres
const mysheet = [1,2.5,900,5,8.7,100]

//on crée la fontion "findthebiggernumber" qui trouve le nombre le plus élevé en parcourant le tableau
function findthebiggernumber(sheet) {
    let biggernumber = sheet[0];
    for(let i = 1; i < sheet.length; i++) {
      if(sheet[i] > biggernumber) {
        biggernumber = sheet[i];
      }
    }
    return biggernumber;
  }

//on invoque la fonction puis renvoie le resultat dans les logs
console.log(findthebiggernumber(mysheet))