import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './style.css';
import sgmImg from '../../assets/login.jpg';
import logoImg from '../../assets/carro-login-black.png';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="logotipo SGM"/>
                <form>
                    <h1>Faça seu Login</h1>
                    <input placeholder="Digite seu Login"></input>
                    <input placeholder="Digite sua Senha"></input>
                    <button className="button" type="submit">Entrar</button>
                    
                    <Link className="back-link" to="/colaborador/novo">
                        <FiLogIn size={16} color="#E02041" />Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={sgmImg} alt="SGM"/>
        </div>
    );
}