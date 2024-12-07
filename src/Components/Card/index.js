import './Card.scss';
import Logo from '../../Images/Logo.svg';


export function Card({ flipped = false, back, handleClick, id }) {
  const cardContentClassNames = ['card__content'];
  if (flipped) {
    cardContentClassNames.push('card__content--flipped');
  }

  const handleClickFn = (id) => {
    if (handleClick) {
      handleClick(id);
    }
  };

  return (
    <div className="card" onClick={() => handleClickFn(id)}>
      <div className={cardContentClassNames.join(' ')}>
        <div className="card__face card__face--front"><img src={Logo} alt='Cabeça com quebra-cabeça' title='Cabeça com quebra-cabeça' /></div>
        <div className="card__face card__face--back">{back}</div>
      </div>
    </div>
  );
}
