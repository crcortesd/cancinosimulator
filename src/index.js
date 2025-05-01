const { YCS_DECK, DUELING_BOOK_MAIN_DECK } = require('./constants');
const { groupDeck, queryYgoProDeck } = require('./helpers');

const handler = async () => {
  const groupedDeck = groupDeck(DUELING_BOOK_MAIN_DECK);
  const nameDeckPromises = groupedDeck.map(async (card) => {
    const response = await queryYgoProDeck(card.code);
    return {
      name: response.name,
      qty: card.qty,
    };
  });
  const namedDeck = await Promise.all(nameDeckPromises);

  console.log(namedDeck);
};

handler();
