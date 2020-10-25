import React from 'react';

// ASSETS //
import logo from '../../../assets/icons/logo_branca.png';

// CSS //
import './Footer.css';

export default function Footer() {
    return (
        <footer className="conteudo footer-content">
            <div className="conteudo footer-content-item">
                    <div className="conteudo footer-content-item-img">
                        <img src={logo} alt="Dust logo" />
                    </div>

                    <p>DustMC &copy;</p>
                    <p>Todos os direitos reservados</p>
                </div>

                <div className="conteudo footer-content-item">
                    <ul>
                        <li><a href="/">Início</a></li>
                        <li><a href="staff">Staff</a></li>
                        <li><a href="ranks">Ranking</a></li>
                        <li><a href="bans">Banimentos</a></li>
                        <li><a href="mutes">Mutes</a></li>
                        <li><a href="forms">Formulários</a></li>
                    </ul>
                </div>

                <div className="conteudo footer-content-credits">
                    <p>Criado por
                        <a href="https://github.com/ViniciuszXL" target="_BLANK" 
                            rel="noopener noreferrer"> ViniciuszXL</a>
                    </p>
                </div>
        </footer>
    );
}