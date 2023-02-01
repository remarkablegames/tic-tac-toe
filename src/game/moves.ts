import { INVALID_MOVE } from 'boardgame.io/core';

export const moves = {
  clickCell,
};

function clickCell({ G, playerID }, id) {
  if (G.cells[id] !== null) {
    return INVALID_MOVE;
  }

  G.cells[id] = playerID;
}
