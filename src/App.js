import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/static/films.json')
    .then((response) => response.json())
    .then(setData);
  }, []);

  function adicionarAoCarrinho(item) {
    console.log(item)
  }

  if (!data || !data.length) return null;

  return (
<div className="container">
  <header className="header">
    <img className="logo" src="/static/images/logo.svg" alt="StarFlix Logo" />
  </header>
  <div className="carousel">
    {data.map((item) => {
      const {name, price, image} = item;
      return (
    <div className="item">
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <div className="info">
        <span className="name">{name}</span>
        <span className="price">R$ {price}</span>
        <button onClick={() => adicionarAoCarrinho(item)}>Adicionar</button>
      </div>
    </div>
      );
    })}

    <footer className="footer">
        <p className="footer-copyright">Teste</p>
    </footer>
  </div>
</div>
);
}

export default App;
