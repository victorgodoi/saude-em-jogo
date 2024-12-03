import './Button.scss';
import { Link } from "react-router-dom";

function Button({ text, color, url, onClick }) {
  return (
    <Link to={url}>
      <button onClick={onClick} style={{ backgroundColor: color }}>
        {text}
      </button>
    </Link>
  );
}

export default Button;