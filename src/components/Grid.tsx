import { Move } from '../game';
import Cell from './Cell';

const gridSize = 3;

export default function Grid({ ctx, G, moves }) {
  const tbody = [];

  for (let i = 0; i < gridSize; i++) {
    const cells = [];

    for (let j = 0; j < gridSize; j++) {
      const id = gridSize * i + j;

      cells.push(
        <Cell
          disabled={Boolean(ctx.gameover)}
          key={id}
          onClick={() => moves[Move.ClickCell](id)}
        >
          {G.cells[id]}
        </Cell>
      );
    }

    tbody.push(<tr key={i}>{cells}</tr>);
  }

  return (
    <table>
      <tbody>{tbody}</tbody>
    </table>
  );
}
