import './BoxDiagnosis.scss';
import IconParty from '../../Images/IconParty.PNG';
import IconMedalha from '../../Images/IconMedalha.svg';

function BoxDiagnosis({ title, text }) {
  return (
    <div id='boxDiagnosis' >
      <div className='boxTitle'>
        <p>{title}</p>
      </div>
      <div className='cardDiagnosis'>
        <div>
          <p>Parabéns!</p>
          <img id='party' src={IconParty} alt='ícone de festa' title='ícone de festa' />
        </div>
        <p>{text}</p>
        <img id='medal' src={IconMedalha} alt='ícone de medalha' title='ícone de medalha' />
      </div>
    </div>
  );
}

export default BoxDiagnosis;