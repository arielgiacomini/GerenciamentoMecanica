import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';


import './style.css';
import logoImg from '../../assets/logo.svg';

export default function CadastroColaborador() {
    return (
            <div className="users-container">
                <div className="content">
                    <section>
                        <img src={logoImg} alt="SGM" />

                        <h1>Cadastro de Colaboradores</h1>
                        <p>Faça seu Cadastro para conseguir acessar ao sistem de Gerenciamento Mecânica.</p>

                        <Link className="back-link" to="/colaborador">
                            <FiArrowLeft size={16} color="#E02041" />Não tenho cadastro
                        </Link>
                    </section>
                    <form>
                        <input placeholder="Nome"></input>
                    </form>
                </div>
            </div>
    );
}