import axios from "axios";

export const getDeck = async (deckId) => {
  const response = await axios.get(`https://api.yugioh.com/api/deck/${deckId}`);
  return response.data;
};
