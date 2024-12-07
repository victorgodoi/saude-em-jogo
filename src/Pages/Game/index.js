import { Card } from '../../Components/Card';
import { Grid } from '../../Components/Grid';
import { cards } from '../../data/cards';
import './Game.scss';

const handleClick = (id) => {
  console.log(id);
};

function Game() {
  return (
    <div className="app">
      <Grid cards={cards} />
    </div>
  );
}

export default Game;