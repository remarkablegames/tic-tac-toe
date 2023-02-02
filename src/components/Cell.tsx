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

interface Props {
  children: 0 | 1 | null;
  disabled: boolean;
  onClick: () => void;
}

export default function Cell(props) {
  let node;

  if (props.children === null) {
    node = (
      <button
        style={cellStyle}
        onClick={props.onClick}
        disabled={props.disabled}
      />
    );
  } else {
    node = <div style={cellStyle}>{numberToLetter[props.children]}</div>;
  }

  return <td>{node}</td>;
}
