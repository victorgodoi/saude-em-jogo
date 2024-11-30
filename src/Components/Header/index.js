import './Header.scss';
import ImgHeader from '../../Images/ImgHeader.png';

function Header({ text }) {
  return (
    <header>
      <img src={ImgHeader} alt='lâmpada acesa' title='lâmpada acesa' />
      <p>{text}</p>
      <div />
    </header>
  );
}

export default Header;