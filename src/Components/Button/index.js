import './Button.scss';

function Button({ text, color }) {
  return <button style={{ backgroundColor: color }} >{text}</button>
};

export default Button;