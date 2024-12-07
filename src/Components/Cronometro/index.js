import { useEffect, useState } from 'react';
import './Cronometro.scss';

function Cronometro({ isRunning, onTimeUp, onTimeUpdate }) {
  const TEMPO_TOTAL = 60;
  const [tempoRestante, setTempoRestante] = useState(TEMPO_TOTAL);

  useEffect(() => {
    if (isRunning && tempoRestante > 0) {
      const timer = setTimeout(() => {
        setTempoRestante((prev) => {
          const novoTempo = prev - 1;
          onTimeUpdate(TEMPO_TOTAL - novoTempo); // Reporta o tempo decorrido
          return novoTempo;
        });
      }, 1000);

      return () => clearTimeout(timer); // Limpa o timer quando desmontar ou isRunning mudar
    }

    if (isRunning && tempoRestante === 0) {
      onTimeUp(); // Notifica que o tempo acabou
    }
  }, [isRunning, tempoRestante, onTimeUp, onTimeUpdate]);

  // Adiciona um reset explícito ao estado do cronômetro quando `isRunning` é redefinido
  useEffect(() => {
    if (!isRunning) {
      setTempoRestante(TEMPO_TOTAL); // Reseta o tempo restante quando o jogo é reiniciado
    }
  }, [isRunning]);

  const formataTempo = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div className="base-timer">
      <span id="base-timer-label" className="base-timer__label">
        {formataTempo(tempoRestante)}
      </span>
    </div>
  );
}

export default Cronometro;

