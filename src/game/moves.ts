import { INVALID_MOVE } from 'boardgame.io/core';

export enum Move {
  ClickCell = 'ClickCell',
}

export const moves = {
  [Move.ClickCell]: clickCell,
};

function clickCell({ G, playerID }, id) {
  if (G.cells[id] !== null) {
    return INVALID_MOVE;
  }

  G.cells[id] = playerID;
}
