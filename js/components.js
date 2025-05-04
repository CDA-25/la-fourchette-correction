/**
 * @description Object game
 * @property {min for Math.round}
 * @property {max for Math.round}
 * @property {nbressaie user}
 * @property {score array for saved score}
 */
let game = {
  min: 10,
  max: 20,
  nbressais: 0,
  score: [],
  generateMystery: (x = game.min, y = game.max) => Math.round(Math.random() * (y - x) + x),
  responseUser: () => parseInt(prompt("Saissie un nombre ?")),
};

/**
 * @description create proprieter object in array game.score and save in game.nbressaie
 * @param {game.score} x
 * @param {game} y
 */
const saveGame = (objectTabScore, object) => {
  let obj = {};
  let nbrPartie = "";

  if (objectTabScore.length === 0) obj.Partie_1 = object.nbressais;
  else {
    let el = Object.keys(objectTabScore[objectTabScore.length - 1]);
    let tab = el[0].split("");

    tab.splice(tab.length - 1, 1, objectTabScore.length + 1);

    tab.forEach((ele) => {
      nbrPartie += ele;
    });

    obj[nbrPartie] = object.nbressais;
  }

  objectTabScore.push(obj);
};

/**
 * @description save score and reset game score
 */
const reset = () => {
  saveGame(game.score, game);
  game.score.forEach((element) => {
    for (const key in element) {
      if (game.nbressais > 1) console.log(`Resultat de la ${key} : ${element[key]} essaies`);
      else console.log(`Resultat de la ${key} : ${element[key]} essaie`);
    }
  });
  game.nbressais = 0;
};

/**
 * @description ré active game + reset game.score | or stop game
 */
const rePlay = (nbrMystery) => {
  let replay = confirm("Clique ok pour continuer, clique annuler pour quitter.");
  let oldNbrRandom = nbrMystery;
  if (replay) {
    reset();
    nbrMystery = game.generateMystery();
    while (oldNbrRandom === nbrMystery) {
      nbrMystery = game.generateMystery();
    }
    console.log("play -> searchedNumber", nbrMystery);
    return nbrMystery;
  } else {
    reset();
    alert("Merci d'avoir joué !");
    return oldNbrRandom;
  }
};

/**
 * @description active game
 */
const play = function () {
  let searchedNumber = game.generateMystery();
  console.log("play -> searchedNumber", searchedNumber);
  let enteredNumber;

  do {
    enteredNumber = game.responseUser();
    game.nbressais++;

    if (enteredNumber < searchedNumber) alert("C'est plus");
    else if (enteredNumber > searchedNumber) alert("C'est moins");
    else if (isNaN(enteredNumber)) {
      alert(`Tu as saisie : ${enteredNumber} ce n'est pas un chiffre`);
    } else if (enteredNumber === searchedNumber) {
      alert("Bravo ! C'était bien " + searchedNumber + " - Nombre d'essais : " + game.nbressais);
      searchedNumber = rePlay(searchedNumber);
    }
  } while (enteredNumber !== searchedNumber);
};
