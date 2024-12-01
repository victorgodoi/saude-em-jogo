import './Home.scss';
import Header from '../../Components/Header';
import Button from '../../Components/Button';
import Footer from '../../Components/Footer';

function Home() {
  return (
    <div className='pageHome'>
      <div className='contentHome'>
        <Header text='Bem-Vindo ao Saúde em Jogo' color='#ff000000' />
        <div id='home'>
          <div className='divHome'>
            <p className='titleHome'>Estimule sua memória, divirta-se e cuide da sua mente!</p>
            <p className='welcome'>Seja Bem - Vindo Antônio!</p>
            <p className='textHome'>Desenvolvemos uma plataforma interativa especialmente para idosos, com o objetivo de estimular a memória e promover a saúde mental de forma lúdica e envolvente. Inspirada no universo dos Simpsons, nosso jogo da memória temático convida você a combinar imagens dos personagens dessa série nostálgica e familiar, criando momentos de diversão e conexão.</p>
            <p className='subTitleHome' >Por Que Jogar?</p>
            <ul>
              <li><p>Estimulação Cognitiva:</p>Ajuda a manter a memória ativa e a agilidade mental.</li>
              <li><p>Bem-estar:</p>Melhora a concentração e promove momentos de diversão.</li>
              <li><p>Saúde Mental:</p>Pode retardar o avanço de condições relacionadas ao declínio cognitivo.</li>
            </ul>
            <div className='divButton'>
              <Button url='/game' color='#458CF7' text='Jogar' />
              <Button url='/diagnosis' color='#66F420' text='Diagnóstico' />
            </div>
          </div>
          <Footer color='#B984C4' />
        </div>
      </div>
    </div>
  );
}

export default Home;