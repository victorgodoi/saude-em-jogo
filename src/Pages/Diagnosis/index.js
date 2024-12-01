import './Diagnosis.scss';
import Header from '../../Components/Header';
import Button from '../../Components/Button';
import Footer from '../../Components/Footer';

function Diagnosis() {
  return (
    <div className='pageDiagnosis'>
      <div className='contentDiagnosis'>
        <Header text='Diagnóstico' color='#9F74BE' />
        <div id='diagnosis'>
          <div className='divDiagnosis'>
          </div>
          <Footer color='#FFF' />
        </div>
      </div>
    </div>
  );
}

export default Diagnosis;