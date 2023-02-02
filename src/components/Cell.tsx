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
  children: string;
  disabled: boolean;
  onClick: () => void;
}

export default function Cell(props) {
  let node;

  if (props.children) {
    node = <div style={cellStyle}>{numberToLetter[props.children]}</div>;
  } else {
    <button
      style={cellStyle}
      onClick={props.onClick}
      disabled={props.disabled}
    />;
  }

  return <td>{node}</td>;
}
