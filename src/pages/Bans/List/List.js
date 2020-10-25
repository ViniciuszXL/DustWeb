import React from 'react';

import './List.css';

export default function List() {
    
    var img = 'https://www.mc-heads.net/avatar/ViniciuszXL/50';
    var img2 = 'https://www.mc-heads.net/avatar/LuizLyrio/50';

    return (
        <div className="conteudo bans-table">
            <div className="conteudo bans-table-title">
                <h1>BANIMENTOS</h1>
            </div>

            <div className="conteudo bans-table-content">
                <div className="conteudo bans-table-top">
                    <div className="conteudo bans-table-top-item bans-item-player"> <p>Jogador</p> </div>
                    <div className="conteudo bans-table-top-item bans-item-player"> <p>Punidor</p> </div>
                    <div className="conteudo bans-table-top-item bans-item-reason"> <p>Razão</p> </div>
                    <div className="conteudo bans-table-top-item bans-item-type"> <p>Tipo</p> </div>
                    <div className="conteudo bans-table-top-item bans-item-date"> <p>Data</p> </div>
                    <div className="conteudo bans-table-top-item bans-item-expiry"> <p>Expira</p> </div>
                </div> 

                <div className="conteudo bans-table-content-items">
                    <div className="conteudo bans-table-content-item">
                        <a href="/player/ViniciuszXL" alt="ViniciuszXL" className="conteudo bans-table-content-username">
                            <img src={img} alt="ViniciuszXL" />
                            <p>ViniciuszXL</p>
                        </a>

                        <a href="/player/LuizLyrio" alt="LuizLyrio" className="conteudo bans-table-content-username">
                            <img src={img2} alt="LuizLyrio" />
                            <p>12345678912</p>
                        </a>

                        <div className="conteudo bans-table-content-type bans-content-reason"> <p>Teste de banimento!</p> </div>
                        <div className="conteudo bans-table-content-type bans-content-type"> <p>Banimento</p> </div>
                        <div className="conteudo bans-table-content-type bans-content-date"> <p>25/10/2020</p> </div>
                        <div className="conteudo bans-table-content-type bans-content-expiry"> <p>Permanente</p> </div>
                    </div>
                </div>
            </div>
        </div>
    );
}