import React from 'react';

// CSS //
import './Menu.css';

export default function Menu() {
    return (
        <div className="conteudo menu">
            <a href="/" className="conteudo menu-content">
                <i className="fas fa-home"></i>
                <p>Início</p>
            </a>

            <a href="staff" className="conteudo menu-content">
                <i className="fas fa-user-friends"></i>
                <p>Staff</p>
            </a>

            <a href="rank" className="conteudo menu-content">
                <i className="fas fa-medal"></i>
                <p>Rank</p>
            </a>

            <a href="bans" className="conteudo menu-content">
                <i className="fas fa-ban"></i>
                <p>Bans</p>
            </a>

            <a href="forms" className="conteudo menu-content">
                <i className="far fa-clipboard"></i>
                <p>Forms</p>
            </a>
        </div>
    );
}
