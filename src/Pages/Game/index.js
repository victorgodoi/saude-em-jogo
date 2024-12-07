import { Card } from '../../Components/Card';
import { Grid } from '../../Components/Grid';
import { cards } from '../../data/cards';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import './Game.scss';

const handleClick = (id) => {
  console.log(id);
};

// function Game() {
//   return (
//     <div className="app">
//       <Grid cards={cards} />
//     </div>
//   );
// }

function Game() {
  return (
    <div className='pageGame'>
      <div className='contentGame'>
        <Header text='Jogo da Memória' color='#9F74BE' />
        <div className='game'>
          <div className='divGame'>
            <div className="app">
              <Grid cards={cards} />
            </div>
          </div>
          <Footer color='#B984C4' />
        </div>
      </div>
    </div >
  );
}

export default Game;