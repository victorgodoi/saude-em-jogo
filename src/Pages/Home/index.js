import Header from '../../Components/Header';
import './Home.scss';
import Logo from '../../Images/Logo.svg';

function Home() {
  return (
    <div className='home'>
      <Header text={''} />
      <div id='login'>
        <p>SAÚDE EM JOGO</p>
        <img src={Logo} alt='Cabeça com quebra-cabeça' title='Cabeça com quebra-cabeça' />
        <input placeHolder='Digite seu nome' />
      </div>
    </div>
  );
}

export default Home;