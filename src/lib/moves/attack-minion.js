import boards from 'lib/state/boards';
import deselectMinion from 'lib/moves/deselect-minion';
import logMessage from 'lib/match-history/log-message';

/**
 * Attacks a minion (index) with the current player's selectedMinionObject.
 * @param {{}} G
 * @param {{}} ctx
 * @param {number} index
 */
const attackMinion = (G, ctx, index) => {
  const { selectedMinionIndex, selectedMinionObject, turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);

  const ATTACKING_MINION = selectedMinionObject[currentPlayer];
  const ATTACKING_MINION_INDEX = selectedMinionIndex[currentPlayer];

  // eject if ATTACKING_MINION can't attack
  if (ATTACKING_MINION && !ATTACKING_MINION.canAttack) return;
  const ATTACKING_MINION_HAS_ONSLAUGHT = ATTACKING_MINION.hasOnslaught;
  const ATTACKING_MINION_ONSLAUGHT_COUNT = ATTACKING_MINION.hasOnslaughtAttack;

  const MINION_BEING_ATTACKED = G.boards[otherPlayer][index];
  const MINION_BEING_ATTACKED_INDEX = index;

  // eject if MINION_BEING_ATTACKED can't be attacked
  if (MINION_BEING_ATTACKED && !MINION_BEING_ATTACKED.canBeAttackedByMinion)
    return;

  logMessage(G, ctx, 'attackMinion', null, MINION_BEING_ATTACKED_INDEX);

  // set attacked minion index for animation
  G.attackedMinionIndex = MINION_BEING_ATTACKED_INDEX;
  G.boards[currentPlayer][
    ATTACKING_MINION_INDEX
  ].isAttackingMinionIndex = MINION_BEING_ATTACKED_INDEX;

  // if minion has energy shield; remove that first
  if (MINION_BEING_ATTACKED.hasEnergyShield) {
    G.boards[otherPlayer][index].hasEnergyShield = false;
  } else {
    // Subtract `ATTACKING_MINION.currentAttack`
    // from MINION_BEING_ATTACKED_INDEX's currentHealth value
    boards.subtractFromMinionHealth(
      G,
      otherPlayer,
      MINION_BEING_ATTACKED_INDEX,
      ATTACKING_MINION.currentAttack
    );
  }

  // if minion has energy shield; remove that first
  if (ATTACKING_MINION.hasEnergyShield) {
    G.boards[currentPlayer][ATTACKING_MINION_INDEX].hasEnergyShield = false;
  } else {
    // Subtract `MINION_BEING_ATTACKED.currentAttack`
    // from ATTACKING_MINION_INDEX's currentHealth value
    boards.subtractFromMinionHealth(
      G,
      currentPlayer,
      ATTACKING_MINION_INDEX,
      MINION_BEING_ATTACKED.currentAttack
    );
  }

  // handle onslaught mechanic
  if (ATTACKING_MINION_HAS_ONSLAUGHT === true) {
    // deincrement hasOnslaughtAttack integer
    G.boards[currentPlayer][
      ATTACKING_MINION_INDEX
    ].hasOnslaughtAttack = Math.abs(
      G.boards[currentPlayer][ATTACKING_MINION_INDEX].hasOnslaughtAttack - 1
    );

    if (ATTACKING_MINION_ONSLAUGHT_COUNT === 0) {
      boards.disableCanAttack(G, currentPlayer, ATTACKING_MINION_INDEX);
      G.boards[currentPlayer][ATTACKING_MINION_INDEX].hasAttacked = true;
    }
  } else {
    // disable ATTACKING_MINION's ability to attack
    boards.disableCanAttack(G, currentPlayer, ATTACKING_MINION_INDEX);
    G.boards[currentPlayer][ATTACKING_MINION_INDEX].hasAttacked = true;
  }

  // remove concealed once you attack
  G.boards[currentPlayer][ATTACKING_MINION_INDEX].isConcealed = false;

  // disable MINION_BEING_ATTACKED's ability to be attacked
  boards.disableCanBeAttacked(G, currentPlayer, MINION_BEING_ATTACKED_INDEX);

  // reset currentPlayer's selectedMinionIndex & selectedMinionObject value
  deselectMinion(G, ctx);

  // kill ANY minions with health <= 0 and reset states
  boards.killMinionIfHealthIsZero(
    G,
    ctx,
    currentPlayer,
    ATTACKING_MINION,
    ATTACKING_MINION_INDEX
  );
  boards.killMinionIfHealthIsZero(
    G,
    ctx,
    otherPlayer,
    MINION_BEING_ATTACKED,
    MINION_BEING_ATTACKED_INDEX
  );

  // G.attackedMinionIndex = null;
};

export default attackMinion;
