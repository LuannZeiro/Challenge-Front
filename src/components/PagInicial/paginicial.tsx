import React from 'react';
import './style.css'; // Certifique-se de que o caminho está correto

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="logo">
        <img src="img/PortoHolding-RGB-H_2.png" width="400px" alt="Porto Holding Logo" />
      </div>
      <h3>A Maior Seguradora do Brasil</h3>
      <div className="botaoentrar">
        <a href="entrar.html">
          <button>ENTRAR</button>
        </a>
      </div>
      <div className="botaocadastrar">
        <a href="cadastrar.html">
          <button>CADASTRAR</button>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
