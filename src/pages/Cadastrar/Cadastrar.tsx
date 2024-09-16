// src/Cadastrar.tsx
import React from 'react';
import './Cadastrar.css'; // Importa o CSS

const Cadastrar: React.FC = () => {
    return (
        <div>
            <div className="logo">
                <a href="index.html">
                    <img src="./src/img/PortoLogo.png" alt="Logo" width="400px" />
                </a>
            </div>
            <h3>A Maior Seguradora do Brasil</h3>
            <div className="dados">
                <p>Selecione uma das opções abaixo:</p>
            </div>
            <div className="cliente">
                <p>Cliente</p>
                <input type="radio" name="cliente" id="cliente" value="cliente" />
            </div>
            <div className="fornecedor">
                <p>Fornecedor</p>
                <input type="radio" name="cliente" id="fornecedor" value="fornecedor" />
            </div>
            <div className="dados2">
                <p>Agora, preencha os campos abaixo:</p>
            </div>
            <div className="nome">
                <input type="text" name="nome" id="nome" placeholder="Nome Completo" />
            </div>
            <div className="cpf">
                <input type="text" name="cpf" id="cpf" placeholder="CPF" />
            </div>
            <div className="email">
                <input type="email" name="email" id="email" placeholder="E-mail" />
            </div>
            <div className="senha">
                <input type="password" name="senha" id="senha" placeholder="Senha" />
            </div>
            <div className="botaoentrar">
                <a href="/Inicial"><button>CONTINUAR</button></a>
            </div>
        </div>
    );
}

export default Cadastrar;
