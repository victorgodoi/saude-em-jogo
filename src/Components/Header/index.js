import './Header.scss';
import ImgHeader from '../../Images/ImgHeader.png';

function Header({ text, color }) {
  return (
    <header style={{ backgroundColor: color }}>
      <img src={ImgHeader} alt='lâmpada acesa' title='lâmpada acesa' />
      <p>{text}</p>
      <div />
    </header>
  );
}

export default Header;