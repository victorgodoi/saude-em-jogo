import '../FirstTime/FirstTime.scss';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import BoxDiagnosis from '../../Components/BoxDiagnosis';

function ThirdTime() {
  return (
    <div className='pageFirstTime'>
      <div className='contentFirstTime'>
        <Header text='Resultado' color='#9F74BE' />
        <div className='firstTime'>
          <div className='divFirstTime'>
            <BoxDiagnosis title='Tempo de Conclusão: 31 a 45 segundos' text='Bom trabalho! Você completou em 31 a 45 segundos, demonstrando foco e determinação. 
            Com um pouco mais de prática, você pode alcançar tempos ainda menores!' />
          </div>
          <Footer color='#B984C4' />
        </div>
      </div>
    </div >
  );
}

export default ThirdTime;