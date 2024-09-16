import React from 'react';
import { Link } from 'react-router-dom';
import './Inicial.css';

const Inicial: React.FC = () => {
    return (
        <div>
            <div className="header">
                <div className="logo">
                    <Link to="/home">
                        <img src="./src/img/PortoLogo.png" alt="Logo" width="350px" />
                    </Link>
                </div>
            </div>
            <div className="header-icons">
                <Link to="/Inicial">
                    <div className="icon">
                        <img src="./src/img/pasta.png" alt="Pasta" />
                    </div>
                </Link>
                <Link to="/ChamarForn">
                    <div className="icon">
                        <img src="./src/img/mais.png" alt="Adicionar" />
                    </div>
                </Link>
                <Link to="/Conta">
                    <div className="icon">
                        <img src="./src/img/user.png" alt="Usuário" />
                    </div>
                </Link>
            </div>
            <div className="content">
                <h2>Chamados ativos</h2>
                <Link to="/chamado">
                    <div className="card">
                        <span>Miguel G.</span>
                        <span>&gt;</span>
                    </div>
                </Link>
                <div className="card">
                    <span>Fulano F.</span>
                    <span>&gt;</span>
                </div>
            </div>
        </div>
    );
};

export default Inicial;
