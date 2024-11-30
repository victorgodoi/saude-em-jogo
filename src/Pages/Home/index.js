import './Home.scss';
import Header from '../../Components/Header';

function Home() {
  return (
    <div className='pageHome'>
      <div className='contentHome'>
        <Header text='Bem-Vindo ao Saúde em Jogo' />
        <div id='home'>
        </div>
      </div>
    </div>
  );
}

export default Home;