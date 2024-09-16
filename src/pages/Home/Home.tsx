// src/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Importa o CSS

const Home: React.FC = () => {
    return (
        <div>
            <div className="logo">
                <img src="./src/img/PortoLogo.png" alt="Logo" width="400px" />
            </div>
            <h3>A Maior Seguradora do Brasil</h3>
            <div className="botaoentrar">
                <Link to="/Entrar"><button>ENTRAR</button></Link>
            </div>
            <div className="botaocadastrar">
                <a href="/Cadastrar"><button>CADASTRAR</button></a>
            </div>
        </div>
    );
}

export default Home;
