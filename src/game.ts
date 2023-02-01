import { INVALID_MOVE } from 'boardgame.io/core';

export function setup() {
  return { cells: [0, 1, 2, 3, 4, 5, 6, 7, 8] };
}

export const turn = {
  minMoves: 1,
  maxMoves: 1,
};

function clickCell({ G, playerID }, id) {
  if (G.cells[id] !== null) {
    return INVALID_MOVE;
  }

  G.cells[id] = playerID;
}

export const moves = {
  clickCell,
};
