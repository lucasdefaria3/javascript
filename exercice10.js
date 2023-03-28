//on crée une chaine de caractères
let myletterstring = "Heyyyyy salut à tous les amis c'est DavidLafargePokemon !"

//on crée la fontion "deletevowel" qui parcours la chaine de caractères et crée une nouvelle chaine à laquelle il n'ajoute que les consonnes dans l'ordre
function voweluppercase(chaine) {
    let voyelles = "aeiouyAEIOUY";
    let resultat = "";
    for (let i = 0; i < chaine.length; i++) {
      if (!voyelles.includes(chaine[i])) {
        resultat += chaine[i].toUpperCase();
      } else {
        resultat += chaine[i];
      }
    }
    return resultat;
  }

//on invoque la fonction puis renvoie le resultat dans les logs
console.log(voweluppercase(myletterstring))