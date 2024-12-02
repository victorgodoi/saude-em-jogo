import './FirstTime.scss';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import BoxDiagnosis from '../../Components/BoxDiagnosis';

function FirstTime() {
  return (
    <div className='pageFirstTime'>
      <div className='contentFirstTime'>
        <Header text='Resultado' color='#9F74BE' />
        <div className='firstTime'>
          <div className='divFirstTime'>
            <BoxDiagnosis title='Tempo de Conclusão: 0 a 15 segundos' text='Você completou o desafio em 0 a 15 segundos, mostrando uma excelente agilidade mental e memória ativa. Esse desempenho é um grande indicador de concentração e rapidez de raciocínio.
            Continue praticando para manter sua mente sempre saudável!' />
          </div>
          <Footer color='#B984C4' />
        </div>
      </div>
    </div >
  );
}

export default FirstTime;