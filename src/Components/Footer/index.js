import './Footer.scss';
import Exit from '../../Images/IconExit.svg';
import Home from '../../Images/IconHome.svg';
import { Link } from "react-router-dom";

function Footer({ color }) {
  return (
    <footer style={{ backgroundColor: color }}>
      <Link style={{ textDecoration: 'none' }} to='/home' >
        <div>
          <p>Home</p>
          <img src={Home} alt='ícone de casa' title='ícone de casa' />
        </div>
      </Link>
      <Link style={{ textDecoration: 'none' }} to='/'>
        <div>
          <p style={{ paddingRight: '10px' }} >Sair</p>
          <img src={Exit} alt='porta de saída' title='porta de saída' />
        </div>
      </Link>
    </footer>
  );
}

export default Footer;