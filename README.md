# Le retour du juste prix

Bon Vincent Lagaf a repris le :microphone: de Philippe Risoli. Et il veut qu'on apporte des modifications à notre programme de juste prix.

## Créer un objet de configuration

Pour simplifier la configuration de notre programme on va regrouper la configuration dans un objet.

On pourrait ainsi avoir un objet `game`, on y renseignera sous forme de propriétés le nombre à chercher et le nombre d'essais.

## Faire une fonction pour jouer

On pourrait regrouper les instructions de notre jeu dans une fonction `play`.

On adaptera nos instructions pour utiliser l'objet déclaré précedemment.

On executera cette fonction une première fois pour lancer le jeu.

## Faire une fonction pour le nombre aléatoire

On va déclarer une fonction pour la génération du nombre aléatoire.  
Cette fonction doit prendre 2 paramètres `min` et `max` et retourner le nombre aléatoire compris entre `min` et `max`

On pourra executer cette fonction là où on a besoin de générer le nombre aléatoire en définissant la plage de recherche, par exemple de 10 à 20. Tiens d'ailleurs on pourrait stocker ces valeurs dans notre objet de configuration.

## Stocker les scores

On pourrait mettre de côté les scores dans un tableau.

Dès qu'on remporte une victoire, on vient mémoriser le nombre d'essais dans ce tableau.

On pourrait afficher ce tableau dans la console avec `console.log` pour visualiser tous les scores dès que la partie se termine.

Puis on relance une partie en executant à nouveau notre fonction `play`

---

<details>
<summary>
  Bonus <strong>facultatif</strong>
</summary>

## Laisser le choix de rejouer

On va laisser le choix à l'utilisateur pour rejouer. On va utiliser `confirm` pour ça  
https://developer.mozilla.org/fr/docs/Web/API/Window/confirm

Si l'utilisateur veut rejouer on execute de nouveau `play`, sinon on affiche les scores en console.

## Améliorer l'affichage des scores

Lorsque l'utilisateur ne souhaite pas rejouer, on va améliorer l'affichage des scores

Pour cela on pourrait parcourir tout le tableau et afficher un message pour chaque entrée du tableau du style `Partie 1 : 3 essais` puis `Partie 2 : 5 essais` et ainsi de suite.

</details>

## Resultat John

```
let game = {
  min: 10,
  max: 20,
  nbressais: 0,
  score: [],
  generateMystery: (x = game.min, y = game.max) => Math.round(Math.random() * (y - x) + x),
  responseUser: () => parseInt(prompt("Quel est le nombre à trouver ?")),
};

const reset = () => {
  game.nbressais = 0;
};

const play = function () {
  let searchedNumber = game.generateMystery();
  console.log("play -> searchedNumber", searchedNumber);
  let enteredNumber;

  do {
    enteredNumber = game.responseUser();
    game.nbressais++;

    if (enteredNumber < searchedNumber) alert("C'est plus");
    else if (enteredNumber > searchedNumber) alert("C'est moins");
    else if (enteredNumber === searchedNumber) {
      alert("Bravo ! C'était bien " + searchedNumber + " - Nombre d'essais : " + game.nbressais);
      let replay = confirm("Veux tu recommencer ? clique ok sinon clique annuler");
      if (replay) {
        reset();
        play();
      } else break;
    }
  } while (enteredNumber !== searchedNumber);
};

let accept = confirm("Salut est ce que tu veux jouer à un jeu ?");
if (accept) play();
else alert("ahhhhh dommage à plus !");
```
