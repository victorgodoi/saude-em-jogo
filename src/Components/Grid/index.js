import './Grid.scss';
import { Card } from '../Card';
import { useRef, useState } from 'react';
import { duplicateRegenerateSortArray } from '../../utils/card-utils';
import Cronometro from '../Cronometro';
import { useNavigate } from 'react-router-dom';

export function Grid({ cards }) {
  const [stateCards, setStateCards] = useState(() =>
    duplicateRegenerateSortArray(cards)
  );
  const [matches, setMatches] = useState(0);
  const [moves, setMoves] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0); // Armazena o tempo decorrido
  const first = useRef(null);
  const second = useRef(null);
  const unflip = useRef(false);
  const navigate = useNavigate(); // Hook para navegação

  const handleReset = () => {
    setStateCards(duplicateRegenerateSortArray(cards));
    first.current = null;
    second.current = null;
    unflip.current = false;
    setMatches(0);
    setMoves(0);
    setIsRunning(false);
    setTime(0); // Reseta o tempo
  };

  const handleTimeUp = () => {
    handleReset(); // Resetar o jogo
  };

  const handleTimeUpdate = (tempoDecorrido) => {
    setTime(tempoDecorrido); // Atualiza o tempo decorrido
  };

  const handleClick = (id) => {
    if (!isRunning) {
      setIsRunning(true); // Iniciar o cronômetro ao clicar no primeiro card
    }

    const newStateCards = stateCards.map((card) => {
      if (card.id !== id || card.flipped) return card;

      if (unflip.current && first.current && second.current) {
        first.current.flipped = false;
        second.current.flipped = false;
        first.current = null;
        second.current = null;
        unflip.current = false;
      }

      card.flipped = true;

      if (first.current === null) {
        first.current = card;
      } else if (second.current === null) {
        second.current = card;
      }

      if (first.current && second.current) {
        if (first.current.back === second.current.back) {
          first.current = null;
          second.current = null;
          setMatches((m) => {
            const novosMatches = m + 1;
            if (novosMatches === 8) {
              setIsRunning(false); // Para o cronômetro
            }
            return novosMatches;
          });
        } else {
          unflip.current = true;
        }
        setMoves((m) => m + 1);
      }

      return card;
    });

    setStateCards(newStateCards);
  };

  const handleResultClick = () => {
    if (time >= 0 && time <= 15) {
      navigate('/firstTime');
    } else if (time >= 16 && time <= 30) {
      navigate('/secondTime');
    } else if (time >= 31 && time <= 45) {
      navigate('/thirdTime');
    } else if (time >= 46 && time <= 55) {
      navigate('/fourthTime');
    } else if (time >= 56 && time <= 59) {
      navigate('/fifthTime');
    }
  };

  return (
    <>
      <div className="text">
        <Cronometro
          isRunning={isRunning}
          onTimeUp={handleTimeUp}
          onTimeUpdate={handleTimeUpdate}
        />
        <div>
          <p>Movimentos: {moves} | Acertos: {matches}</p>
        </div>
        <button
          id="buttonGame"
          onClick={handleResultClick}
          disabled={matches !== 8}
          style={{ backgroundColor: matches !== 8 ? '#bbbbbb' : '#FDDE00' }}
        >
          Resultado
        </button>
      </div>
      <div className="grid">
        {stateCards.map((card) => (
          <Card {...card} key={card.id} handleClick={handleClick} />
        ))}
      </div>
    </>
  );
}
