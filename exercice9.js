//on crée une chaine de caractères
let myletterstring = "Heyyyyy salut à tous les amis c'est DavidLafargePokemon !"

//on crée la fontion "deletevowel" qui parcours la chaine de caractères et incrémente la valeur de la variable a losqu'un lettre correspond à un charactère de la liste 
function voweluppercase(chain) {
    a = 0
    let vowel = "aeiouyAEIOUY";
    let result = "";
    for (let i = 0; i < chain.length; i++) {
      if (vowel.includes(chain[i])) {
        result += chain[i].toUpperCase();
        a = a + 1
      }
    }
    return a;
  }

//on invoque la fonction puis renvoie le resultat dans les logs
console.log(voweluppercase(myletterstring))