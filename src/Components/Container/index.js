import { useEffect } from 'react';
import './Container.scss';
import FavIconSEJ from '../../Images/FavIconSEJ.png';

function Container({ children }) {
  useEffect(() => {
    document.title = "Saúde em Jogo";
  }, []);

  useEffect(() => {
    const changeFavicon = (url) => {
      const link = document.querySelector("link[rel~='icon']");
      if (link) {
        link.setAttribute("href", url);
      } else {
        const newLink = document.createElement("link");
        newLink.rel = "icon";
        newLink.href = url;
        document.head.appendChild(newLink);
      }
    };

    changeFavicon(FavIconSEJ);
  }, []);

  return <div className='conteudo'>{children}</div>
};

export default Container;