import './Login.scss';
import Logo from '../../Images/Logo.svg';
import ImgHeader from '../../Images/ImgHeader.png';
import Button from '../../Components/Button';
import { useEffect, useState } from 'react';

function Login() {
  const [valueInput, setValueInput] = useState('');
  const [error, setError] = useState(false);

  const handleInputChange = (event) => {
    setValueInput(event.target.value);
    setError(false);
  };

  useEffect(() => {
    localStorage.removeItem("name");
  }, []);

  const handleButtonClick = () => {
    if (!valueInput.trim()) {
      setError(true);
      return;
    }

    localStorage.setItem("name", valueInput);
    window.location.href = '/home';
  };

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
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <input
                placeholder='Digite seu nome'
                value={valueInput}
                onChange={handleInputChange}
                style={{
                  border: error ? '2px solid red' : '1px solid #ccc',
                }}
              />
              {error && <p id="mensageError">Preencha o nome antes de entrar</p>}
              <Button onClick={handleButtonClick} color='#FFDE00' text='Entrar' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;