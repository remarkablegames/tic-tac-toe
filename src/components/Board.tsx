import { Move } from '../game';

const cellStyle = {
  border: '1px solid #555',
  fontFamily: 'Helvetica, Arial',
  width: '50px',
  height: '50px',
  lineHeight: '50px',
  textAlign: 'center',
};

const numberToLetter = {
  0: 'O',
  1: 'X',
};

export default function TicTacToeBoard({ ctx, G, moves }) {
  let winner = <></>;

  if (ctx.gameover) {
    winner =
      ctx.gameover.winner !== undefined ? (
        <p>Winner: {ctx.gameover.winner}</p>
      ) : (
        <p>Draw!</p>
      );
  }

  const tbody = [];

  for (let i = 0; i < 3; i++) {
    const cells = [];

    for (let j = 0; j < 3; j++) {
      const id = 3 * i + j;

      cells.push(
        <td key={id}>
          {G.cells[id] ? (
            <div style={cellStyle}>{numberToLetter[G.cells[id]]}</div>
          ) : (
            <button
              style={cellStyle}
              onClick={() => moves[Move.ClickCell](id)}
              disabled={Boolean(ctx.gameover)}
            />
          )}
        </td>
      );
    }

    tbody.push(<tr key={i}>{cells}</tr>);
  }

  return (
    <>
      <table>
        <tbody>{tbody}</tbody>
      </table>

      {winner}
    </>
  );
}
