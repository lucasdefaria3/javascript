function nombreEnMots(nombre) {  // Définition de la fonction qui prend un nombre en argument

    // Tableaux contenant les noms des nombres de 0 à 19 et les dizaines de 10 à 90
    const nomsNombres = ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"];
    const nomsDizaines = ["", "", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingt", "quatre-vingt-dix"];

    if (nombre < 0 || nombre > 99) {  // Vérification que le nombre est dans la plage de 0 à 99
      return "Le nombre doit être compris entre 0 et 99";
    }

    if (nombre < 20) {  // Cas particuliers pour les nombres de 0 à 19
      return nomsNombres[nombre];
    }

    if (nombre % 10 === 0) {  // Cas particuliers pour les nombres multiples de 10
      return nomsDizaines[nombre / 10];
    }

    if (nombre < 70) {  // Cas des nombres de 21 à 69
      return nomsDizaines[Math.floor(nombre / 10)] + "-" + nomsNombres[nombre % 10];
    }

    if (nombre < 80) {  // Cas des nombres de 70 à 79
      return "soixante-dix" + "-" + nomsNombres[nombre - 60];
    }

    // Cas des nombres de 80 à 99
    return nomsDizaines[Math.floor(nombre / 10)] + "-" + nomsNombres[nombre - 80];
  }

  // Exemple d'utilisation de la fonction
  console.log(nombreEnMots(92));  // "quarante-deux"