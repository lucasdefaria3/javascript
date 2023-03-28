//on crée un tableau contenant les jours de la semaine
const mysheet = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

//on définis une fonction qui affiche le premier jour de la semaine
function firstdayoftheweek(sheet) {
  return("the first day of the week is : " + sheet[0]);
}

// Appeler la fonction pour afficher le premier jour de la semaine
console.log(firstdayoftheweek(mysheet));
