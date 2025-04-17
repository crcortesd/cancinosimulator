const { YCS_DECK } = require("./constants");

const shuffleDeck = (orderedDeck) => {
  // Create a copy of the deck to avoid modifying the original
  const shuffled = [...orderedDeck];
  // Fisher-Yates (Knuth) shuffle algorithm
  for (let i = shuffled.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements at indices i and j
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
const cancino = () => {
  let coolHands = 0;
  for (let i = 0; i < 10000; i++) {
    const shuffledDeck = shuffleDeck(YCS_DECK);
    const goingFirstHand = shuffledDeck.slice(0, 5);
    const cardsYouWantInHand = [
      {
        main: "Silvy of the White Forest",
      },
      {
        main: "Elzette of the White Forest",
      },
      {
        main: "Fiendsmith Engraver",
        ANY: ["Silvy of the White Forest", "Deception of the Sinful Spoils"],
      },
      {
        main: "WANTED: Seeker of Sinful Spoils",
        ANY: ["Whitches of the White Forest"],
      },
      {
        main: "Diabellstar the Black Witch",
        ANY: ["Whitches of the White Forest"],
      },
      {
        main: "Deception of the Sinful Spoils",
        ANY: ["Whitches of the White Forest"],
      },
    ];

    const handCardNames = goingFirstHand.map((card) => card.name);

    const foundValidCombo = cardsYouWantInHand.some((combo) => {
      // Check if the main card is in the hand
      const hasMainCard = handCardNames.includes(combo.main);

      // If there's no ANY requirement, just check for the main card
      if (!combo.ANY) {
        return hasMainCard;
      }
      // If there is an ANY requirement, check if the main card AND at least one of the ANY cards are present
      const hasAnyOfTheRequiredCards = combo.ANY.some((card) =>
        handCardNames.includes(card)
      );

      return hasMainCard && hasAnyOfTheRequiredCards;
    });
    if (foundValidCombo) {
      coolHands++;
    }
  }
  const coolHandsRatios = (coolHands / 10000) * 100;
  console.log(coolHandsRatios);
};

cancino();
