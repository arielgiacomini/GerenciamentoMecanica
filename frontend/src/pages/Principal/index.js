import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiSave } from 'react-icons/fi';

import './style.css';

import logoImg from '../../assets/carro-login-black.png';

export default function Principal() {
    return (
    <div className="principal-container">
        <header>
            <img src={logoImg} alt="SGM"></img>
                <span>Bem vindo(a), Ariel Giacomini</span>
                    <Link className="button" to="/orcamento/novo">Gerar Orçamento</Link>
                    <Link className="button" to="/servico/novo">Gerar Serviço</Link>
            <button type="button">
                <FiPower size={18} color="#E02041" />
            </button>
        </header>
        <h1>Orçamentos de Hoje</h1>
        <ul>
            <li>
                <strong>ORÇAMENTO: 5364578</strong>
                <p>Cliente: Ivo Pereira de Alencar</p>
                <strong>DESCRIÇÃO:</strong>
                <p>Troca de Vela, Oléo e limpeza de bicos</p>
                <strong>SERVIÇOS:</strong>
                <ul>
                    <li>
                        Limpeza de Bico - R$ 100,00
                    </li>
                    <li>
                        Troca de Vela - R$ 63,00
                    </li>
                    <li>
                        Troca de Oléo - R$ 38,00
                    </li>                    
                </ul>
                <strong>PEÇAS:</strong>
                <ul>
                    <li>
                        Oléo Ipiranga, 1L - 4x - R$ 265,00
                    </li>
                    <li>
                        Vela Paran - 6x - R$ 112,34
                    </li>
                </ul>
                <button type="button">
                    <FiSave  size={20} color="#a8a8b3" />
                </button>
            </li>
            <li>
                <strong>ORÇAMENTO: 643674</strong>
                <p>Cliente: Ivo Pereira de Alencar</p>
                <strong>DESCRIÇÃO:</strong>
                <p>Troca de Vela, Oléo e limpeza de bicos</p>
                <strong>SERVIÇOS:</strong>
                <ul>
                    <li>
                        Limpeza de Bico - R$ 100,00
                    </li>
                    <li>
                        Troca de Vela - R$ 63,00
                    </li>
                    <li>
                        Troca de Oléo - R$ 38,00
                    </li>                    
                </ul>
                <strong>PEÇAS:</strong>
                <ul>
                    <li>
                        Oléo Ipiranga, 1L - 4x - R$ 265,00
                    </li>
                    <li>
                        Vela Paran - 6x - R$ 112,34
                    </li>
                </ul>
                <button type="button">
                    <FiSave  size={20} color="#a8a8b3" />
                </button>
            </li>
            <li>
                <strong>ORÇAMENTO: 546435</strong>
                <p>Cliente: Ivo Pereira de Alencar</p>
                <strong>DESCRIÇÃO:</strong>
                <p>Troca de Vela, Oléo e limpeza de bicos</p>
                <strong>SERVIÇOS:</strong>
                <ul>
                    <li>
                        Limpeza de Bico - R$ 100,00
                    </li>
                    <li>
                        Troca de Vela - R$ 63,00
                    </li>
                    <li>
                        Troca de Oléo - R$ 38,00
                    </li>                    
                </ul>
                <strong>PEÇAS:</strong>
                <ul>
                    <li>
                        Oléo Ipiranga, 1L - 4x - R$ 265,00
                    </li>
                    <li>
                        Vela Paran - 6x - R$ 112,34
                    </li>
                </ul>
                <button type="button">
                    <FiSave  size={20} color="#a8a8b3" />
                </button>
            </li>
            <li>
                <strong>ORÇAMENTO: 174571</strong>
                <p>Cliente: Ivo Pereira de Alencar</p>
                <strong>DESCRIÇÃO:</strong>
                <p>Troca de Vela, Oléo e limpeza de bicos</p>
                <strong>SERVIÇOS:</strong>
                <ul>
                    <li>
                        Limpeza de Bico - R$ 100,00
                    </li>
                    <li>
                        Troca de Vela - R$ 63,00
                    </li>
                    <li>
                        Troca de Oléo - R$ 38,00
                    </li>                    
                </ul>
                <strong>PEÇAS:</strong>
                <ul>
                    <li>
                        Oléo Ipiranga, 1L - 4x - R$ 265,00
                    </li>
                    <li>
                        Vela Paran - 6x - R$ 112,34
                    </li>
                </ul>
                <button type="button">
                    <FiSave  size={20} color="#a8a8b3" />
                </button>
            </li>
        </ul>
    </div>
    );
}