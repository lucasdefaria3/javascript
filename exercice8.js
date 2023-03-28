//on crée une chaine de caractères
let myletterstring = "Heyyyyy salut à tous les amis c'est DavidLafargePokemon !"

//on crée la fontion "deletevowel" qui parcours la chaine de caractères et crée une nouvelle chaine à laquelle il ajoute les consonnes en majuscule ou les voyelles
function voweluppercase(chain) {
    let vowel = "aeiouyAEIOUY";
    let result = "";
    for (let i = 0; i < chain.length; i++) {
      if (vowel.includes(chain[i])) {
        result += chain[i].toUpperCase();
      } else {
        result += chain[i];
      }
    }
    return result;
  }

//on invoque la fonction puis renvoie le resultat dans les logs
console.log(voweluppercase(myletterstring))