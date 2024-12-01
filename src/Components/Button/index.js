import './Button.scss';
import { Link } from "react-router-dom";

function Button({ text, color, url }) {
  return <Link to={url}><button style={{ backgroundColor: color }} >{text}</button></Link >
};

export default Button;