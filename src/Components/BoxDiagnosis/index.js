import './BoxDiagnosis.scss';
import IconParty from '../../Images/iconeFesta.png';
import IconMedalha from '../../Images/IconMedalha.svg';

function BoxDiagnosis({ title, text }) {
  return (
    <div id='boxDiagnosis' >
      <div className='boxTitle'>
        <p>{title}</p>
      </div>
      <div className='card'>
        <div>
          <p>Parabéns!</p>
          <img src={IconParty} alt='ícone de festa' title='ícone de festa' />
        </div>
        <p>{text}</p>
        <img src={IconMedalha} alt='ícone de medalha' title='ícone de medalha' />
      </div>
    </div>
  );
}

export default BoxDiagnosis;