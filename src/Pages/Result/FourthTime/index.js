import '../FirstTime/FirstTime.scss';
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';
import BoxDiagnosis from '../../../Components/BoxDiagnosis';

function FourthTime() {
  return (
    <div className='pageFirstTime'>
      <div className='contentFirstTime'>
        <Header text='Resultado' color='#9F74BE' />
        <div className='firstTime'>
          <div className='divFirstTime'>
            <BoxDiagnosis title='Tempo de Conclusão: 46 a 55 segundos' text='Seu tempo foi de 46 a 55 segundos, mostrando um bom desempenho e persistência. 
            Continue jogando para melhorar sua agilidade mental!' />
          </div>
          <Footer color='#B984C4' />
        </div>
      </div>
    </div >
  );
}

export default FourthTime;