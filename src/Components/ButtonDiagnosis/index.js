import './ButtonDiagnosis.scss';
import { Link } from "react-router-dom";

function ButtonDiagnosis({ text, url }) {
  return <Link to={url}><button >{text}</button></Link >
};

export default ButtonDiagnosis;