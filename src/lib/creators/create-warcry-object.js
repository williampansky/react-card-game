import getCardByID from 'lib/utils/get-card-by-id';

/**
 * Creates an object with Warcry-specific key:values.
 * @param {string} cardId
 * @returns {{
 *  id: string
 *  amount: number
 *  spellType: string
 *  spellContext: string
 *  targetingArrowText: string
 * }}
 */
const createWarcryObject = cardId => {
  const CARD_OBJECT = getCardByID(cardId);
  return {
    id: CARD_OBJECT.id,
    amount: CARD_OBJECT.warcryNumber,
    name: CARD_OBJECT.name,
    rarity: CARD_OBJECT.rarity,
    set: CARD_OBJECT.set,
    spellType: CARD_OBJECT.spellType,
    spellContext: CARD_OBJECT.spellContext,
    targetingArrowText: CARD_OBJECT.targetingArrowText
  };
};

export default createWarcryObject;
