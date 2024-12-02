import './Diagnosis.scss';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import ButtonDiagnosis from '../../Components/ButtonDiagnosis';
import IconRelogio from '../../Images/IconRelogio.svg';

function Diagnosis() {
  return (
    <div className='pageDiagnosis'>
      <div className='contentDiagnosis'>
        <Header text='Diagnóstico' color='#9F74BE' />
        <div id='diagnosis'>
          <div className='divDiagnosis'>
            <p>Selecione o tempo de jogo para visualizar seu desempenho:</p>
            <div className='divButtons'>
              <div>
                <ButtonDiagnosis text='0 a 15 segundos' url='' />
                <ButtonDiagnosis text='16 a 30 segundos' url='' />
              </div>
              <div>
                <ButtonDiagnosis text='31 a 45 segundos' url='' />
                <ButtonDiagnosis text='46 a 55 segundoss' url='' />
              </div>
              <div>
                <ButtonDiagnosis text='56 a 60 segundos' url='' />
              </div>
            </div>
          </div>
          <div>
            <div className='relogio'>
              <img src={IconRelogio} alt='relógio' title='relógio' />
            </div>
            <Footer color='#F4D2FB' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Diagnosis;