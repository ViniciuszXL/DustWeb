import React from 'react';

// Assets and CSS //
import logo from '../../../assets/icons/logo_branca';
import '../../../css/App.css';

export default function Header() {
    return (
        <div className="conteudo topo">
            <img src={logo} />
        </div>
    );
}
