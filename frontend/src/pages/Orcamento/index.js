import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './style.css';
import logoImg from '../../assets/carro-login-black.png';

export default function CadastroOrcamento() {
    return (
            <div className="orcamento-container">
                <div className="content">
                    <section>
                        <img src={logoImg} alt="SGM" />

                        <h1>Cadastro de Orçamento</h1>
                        <p>Aqui você escolhe todos os itens para seu cliente</p>

                        <Link className="back-link" to="/principal">
                            <FiArrowLeft size={16} color="#E02041" />Voltar para página principal
                        </Link>
                    </section>
                    <form>
                        <input type="text" placeholder="Usuário" />
                        <input type="text" placeholder="Nome" />
                        <input type="text" placeholder="Nome Completo" />
                        <input type="text" placeholder="CPF" />
                        <label className="label-Datas">Data de Nascimento</label>
                        <input className="input-Datas" type="date" placeholder="Data de Nascimento" />
                        <input type="email" placeholder="E-mail Pessoal" />
                        <input type="email" placeholder="E-mail Profissional" />
                        <label className="label-Datas">Data de Admissão</label>
                        <input type="date" placeholder="Admissão" />
                        <label className="label-Datas">Data de Demissão</label>
                        <input type="date" placeholder="Demissão" />
                        
                        <div className="input-group">
                                <p>Usuário Ativo?</p>
                                <label for="AtivoSim">Sim</label>
                                <input type="radio" id="AtivoSim" name="Statusorcamento" value="1"/>
                                <label for="AtivoNao">Não</label>
                                <input type="radio" id="AtivoNao" name="StatusColaborador" value="0"/>
                        </div>
                        <button className="button" type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>
    );
}