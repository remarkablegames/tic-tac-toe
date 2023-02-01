export function setup() {
  return { cells: [0, 1, 2, 3, 4, 5, 6, 7, 8] };
}

export const moves = {
  clickCell: ({ G, playerID }, id) => {
    G.cells[id] = playerID;
  },
};
