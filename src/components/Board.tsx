import Grid from './Grid';

export default function Board(props) {
  let winner = <></>;

  if (props.ctx.gameover) {
    winner =
      props.ctx.gameover.winner !== undefined ? (
        <p>Winner: {props.ctx.gameover.winner}</p>
      ) : (
        <p>Draw!</p>
      );
  }

  return (
    <>
      <Grid {...props} />
      {winner}
    </>
  );
}
