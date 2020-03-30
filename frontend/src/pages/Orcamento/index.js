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
                        <input type="text" placeholder="Pesquisa de Cliente" />
                        <input type="text" placeholder="Mão de Obra" />
                        <input type="text" placeholder="Produtos/Peças" />
                        <input type="text" placeholder="Observações" />
                        <button className="button" type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>
    );
}