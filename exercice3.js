//on crée une chaine de caractères
let myletterstring = "Heyyyyy salut à tout les amis c'est DavidLafargePokemon !"

//on crée la fontion "deletevowel" qui parcours la chaine de caractères et crée une nouvelle chaine à laquelle il n'ajoute que les consonnes dans l'ordre
function deletevowel(letterstring) {
    let newletterstring = "";
    for(let i = 0; i < letterstring.length; i++) {
      let caractere = letterstring.charAt(i);
      if(caractere.toLowerCase() !== "a" && caractere.toLowerCase() !== "e" && caractere.toLowerCase() !== "i" && caractere.toLowerCase() !== "o" && caractere.toLowerCase() !== "u") {
        newletterstring += caractere;
      }
    }
    return newletterstring;
  }

//on invoque la fonction puis renvoie le resultat dans les logs
console.log(deletevowel(myletterstring))