let currentArr = [];
const deckCount = document.getElementById("deckNumber");

function cardArray(card) {
  currentArr.push(card);
  document.getElementById("count").innerHTML = currentArr;
  countCards(currentArr);
}

function countCards(arr, decks) {
  let count = 0;
  decks = deckCount.value * 52;

  for (var i = 0; i < arr.length; i++) {
    let cards = arr[i];

    if (decks <= 0) {
      alert("No cards left in game.  Click Reset to start again.");
      resetArr();
    } else if (
      cards === "a" ||
      cards === "k" ||
      cards === "q" ||
      cards === "j" ||
      cards === "10"
    ) {
      count -= 1;
      decks -= 1;
    } else if (
      cards === "2" ||
      cards === "3" ||
      cards == "4" ||
      cards === "5" ||
      cards === "6"
    ) {
      count++;
      decks--;
    } else {
      decks--;
    }

    let wholeDecks = decks / 52;
    let accurateDecks;
    wholeDecks > 1
      ? (accurateDecks = Math.round(wholeDecks * 2) / 2)
      : (accurateDecks = 1);
    let trueCount = Math.ceil(count / accurateDecks);
    let bettingUnits;
    trueCount > 2 ? (bettingUnits = trueCount - 1) : (bettingUnits = 1);
    document.getElementById("count").innerHTML = "Running Count: " + count;
    document.getElementById("cardsLeft").innerHTML =
      "Decks Left: " + accurateDecks;
    document.getElementById("trueCount").innerHTML = "True Count: " + trueCount;
    document.getElementById(
      "bettingUnits"
    ).innerHTML = `Bet Size: ${bettingUnits} Units`;
  }
}

let resetArr = () => {
  currentArr = [];
  document.getElementById("count").innerHTML = "Running Count:";
  document.getElementById("cardsLeft").innerHTML = "Decks Left:";
  document.getElementById("trueCount").innerHTML = "True Count:";
  document.getElementById("bettingUnits").innerHTML = "Bet Size:";
};

const cardDivs = document.getElementsByClassName("col-4");

for (var i = 0; i < cardDivs.length; i++) {
  cardDivs[i].classList.add("animate__animated");
  console.log(cardDivs[i].classList, i);
  cardDivs[i].addEventListener("click", function () {
    this.classList.add("animate__bounce");
    setTimeout(() => {
      this.classList.remove("animate__bounce");
    }, 900);
  });
}
