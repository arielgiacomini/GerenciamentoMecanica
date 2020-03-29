import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './style.css';
import sgmImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="logotipo SGM"/>

                <form>
                    <h1>Faça seu Logon</h1>
                    <input placeholder="Sua ID"></input>
                    <button className="button" type="submit">Entrar</button>

                    <Link to="/users">
                        <FiLogIn size={16} color="#E02041" />Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={sgmImg} alt="SGM"/>
        </div>
    );
}