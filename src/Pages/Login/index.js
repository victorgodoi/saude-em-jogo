import './Login.scss';
import Logo from '../../Images/Logo.svg';
import ImgHeader from '../../Images/ImgHeader.png';
import Button from '../../Components/Button';

function Login() {
  return (
    <div className='pageLogin'>
      <div className='contentLogin'>
        <div id='headerLogin'>
          <img src={ImgHeader} alt='lâmpada acesa' title='lâmpada acesa' />
        </div>
        <div id='login'>
          <div className='divLogin'>
            <p>SAÚDE EM JOGO</p>
            <img src={Logo} alt='Cabeça com quebra-cabeça' title='Cabeça com quebra-cabeça' />
            <div>
              <input placeHolder='Digite seu nome' />
              <Button color='#FFDE00' text='Entrar' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;