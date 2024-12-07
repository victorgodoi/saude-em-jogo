import { cards } from '../data/cards';

// Função para gerar uma chave única
const keyGen = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

// Duplica os elementos de um array
export const duplicateArray = (array) => {
  return array.concat(array);
};

// Embaralha os elementos de um array
export const sortArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

// Regenera o ID dos cards
export const regenerateCard = (cards) => {
  return cards.map((card) => ({ ...card, id: keyGen() }));
};

// Duplica, regenera os IDs e embaralha os cards
export const duplicateRegenerateSortArray = (cards) => {
  return sortArray(regenerateCard(duplicateArray(cards)));
};

console.log(duplicateRegenerateSortArray(cards));
