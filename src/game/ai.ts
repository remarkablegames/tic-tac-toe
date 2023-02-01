export const ai = {
  enumerate,
};

function enumerate(G, ctx) {
  const moves = [];

  for (let i = 0; i < 9; i++) {
    if (G.cells[i] === null) {
      moves.push({ move: 'clickCell', args: [i] });
    }
  }

  return moves;
}
