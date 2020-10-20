import React from 'react';

import '../css/Address.css';

export default function Address() {
    return (
        <div className="conteudo address">
            <div className="conteudo address-content">
                <h1>Nosso IP</h1>
                <h2>Clique no IP para copiar</h2>
                <div className="conteudo address-content-ip"> <p>MC-DUST.COM.BR</p> </div>
                <p>Recomendamos que você utilize a versão 1.8.9 do Minecraft.</p>
            </div>
        </div>
    );
}