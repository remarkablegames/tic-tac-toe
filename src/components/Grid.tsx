import { Move } from '../game';
import Cell from './Cell';

export default function Grid({ ctx, G, moves }) {
  const tbody = [];

  for (let i = 0; i < 3; i++) {
    const cells = [];

    for (let j = 0; j < 3; j++) {
      const id = 3 * i + j;

      cells.push(
        <Cell
          disabled={Boolean(ctx.gameover)}
          key={id}
          onClick={() => moves[Move.ClickCell](id)}
        >
          {id}
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
