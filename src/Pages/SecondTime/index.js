import '../FirstTime/FirstTime.scss';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import BoxDiagnosis from '../../Components/BoxDiagnosis';

function SecondTime() {
  return (
    <div className='pageFirstTime'>
      <div className='contentFirstTime'>
        <Header text='Resultado' color='#9F74BE' />
        <div className='firstTime'>
          <div className='divFirstTime'>
            <BoxDiagnosis title='Tempo de Conclusão: 16 a 30 segundos' text='Muito bom! Seu tempo foi de 16 a 30 segundos, 
            indicando uma ótima concentração e capacidade de lembrar rapidamente. Que tal tentar melhorar ainda mais?' />
          </div>
          <Footer color='#B984C4' />
        </div>
      </div>
    </div >
  );
}

export default SecondTime;