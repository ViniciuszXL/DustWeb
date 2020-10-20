import React from 'react';

// Page //
import Menu_Mobile from './Menu_Mobile.js';

// CSS //
import '../../../css/App.css';

export default function Menu() {
    return (
        <div className="menu">
            <div className="conteudo menu-table-center">
                <Menu_Mobile />
            </div>
        </div>
    );
}
