import '../FirstTime/FirstTime.scss';
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';
import BoxDiagnosis from '../../../Components/BoxDiagnosis';

function FifthTime() {
  return (
    <div className='pageFirstTime'>
      <div className='contentFirstTime'>
        <Header text='Resultado' color='#9F74BE' />
        <div className='firstTime'>
          <div className='divFirstTime'>
            <BoxDiagnosis title='Tempo de Conclusão: 56 a 60 segundos' text='Você conseguiu! Finalizou em 56 a 60 segundos, completando o desafio com determinação. 
            Jogar regularmente pode ajudar a melhorar ainda mais seu tempo!' />
          </div>
          <Footer color='#B984C4' />
        </div>
      </div>
    </div >
  );
}

export default FifthTime;