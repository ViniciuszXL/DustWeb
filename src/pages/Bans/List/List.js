import Axios from 'axios';
import Utilitaries from '../../../backend/Utilitaries';
import React, { useState, useEffect } from 'react';

// Image //
import load from '../../../assets/gifs/carregamento.gif';

// CSS //
import './List.css';

export default function List() {
    
    var [bans, setBans] = useState([]);

    useEffect(() => {
        Utilitaries.removeItem('page-bans');
        Utilitaries.removeItem('maxPage-bans');

        Axios.get(Utilitaries.getPunishments(1, 1, 1)).then(res => {
            var data = res.data;
            if (data === undefined)
                return;
            Utilitaries.setStorage('page-bans', 1);
            Utilitaries.setStorage('maxPage-bans', data.maxPage);   
        });
        
        var interval = setInterval(() => {
            Utilitaries.modifyHTML('bans-table-title', 
                '<h1>BANIMENTOS (1/' + Utilitaries.getStorage('maxPage-bans') + ') </h1>');

            Axios.get(Utilitaries.getPunishments(0, 1, 1)).then(res => {
                var data = res.data;
                if (data === undefined)
                    return;

                try {
                    setBans(data);
                } finally {
                    Utilitaries.removeDiv('bans-table-gif');
                    clearInterval(interval);
                }
            }); 
        }, 2500);
    }, []);

    function previousPage(event) {
        event.preventDefault();
        var page = parseInt(Utilitaries.getStorage('page-bans'));
        var maxPage = parseInt(Utilitaries.getStorage('maxPage-bans'));
        if ((page - 1) < 1)
            return;
        
        Utilitaries.setStorage('page-bans', (page - 1));
        Axios.get(Utilitaries.getPunishments(0, 1, (page - 1))).then(res => {
            var data = res.data;
            if (data === undefined)
                return;

            setBans(res.data);
            Utilitaries.modifyHTML('bans-table-title', '<h1>BANIMENTOS ('+(page-1)+'/'+maxPage+') </h1>');
        });
    }

    function nextPage(event) {
        event.preventDefault();
        var page = parseInt(Utilitaries.getStorage('page-bans'));
        var maxPage = parseInt(Utilitaries.getStorage('maxPage-bans'));
        if ((page + 1) > maxPage) 
            return;
        
        Utilitaries.setStorage('page-bans', (page + 1));
        Axios.get(Utilitaries.getPunishments(0, 1, (page + 1))).then(res => {
            var data = res.data;
            if (data === undefined)
                return;
            
            setBans(res.data);
            Utilitaries.modifyHTML('bans-table-title', '<h1>BANIMENTOS ('+(page+1)+'/'+maxPage+') </h1>');
        }); 
    }

    return (
        <div className="conteudo bans-table">
            <div className="conteudo bans-table-title" id="bans-table-title">
                <h1>BANIMENTOS</h1>
            </div>

            <div className="conteudo bans-table-content">
                <div className="conteudo bans-table-top">
                    <div className="conteudo bans-table-top-item bans-item-player"> <p>Jogador</p> </div>
                    <div className="conteudo bans-table-top-item bans-item-player"> <p>Punido por</p> </div>
                    <div className="conteudo bans-table-top-item bans-item-reason"> <p>Razão</p> </div>
                    <div className="conteudo bans-table-top-item bans-item-type"> <p>Tipo</p> </div>
                    <div className="conteudo bans-table-top-item bans-item-date"> <p>Data</p> </div>
                    <div className="conteudo bans-table-top-item bans-item-expiry"> <p>Expira</p> </div>
                </div> 

                <div className="conteudo bans-table-gif" id="bans-table-gif">
                    <img src={ load } alt="Loading" />
                </div>

                {
                    bans.map(ban => (
                        <div className="conteudo bans-table-content-items" key={ ban.key }>
                            <div className="conteudo bans-table-content-item">
                                <a href={ '/player/' + ban.punished } alt={ ban.punished } className="conteudo bans-table-content-username">
                                    <img src={ ban.punishedUrl } alt={ ban.punished } />
                                    <p>{ ban.punished }</p>
                                </a>

                                <a href={ '/player/' + ban.punisher } alt={ ban.punisher } className="conteudo bans-table-content-username">
                                    <img src={ ban.punisherUrl } alt={ ban.punisher } />
                                    <p>{ ban.punisher }</p>
                                </a>

                                <div className="conteudo bans-table-content-type bans-content-reason"> 
                                    <p>{ ban.reason }</p> 
                                </div>
                                <div className="conteudo bans-table-content-type bans-content-type"> 
                                    <p>{ ban.type }</p> 
                                </div>
                                <div className="conteudo bans-table-content-type bans-content-date"> 
                                    <p>{ ban.date }</p> 
                                </div>
                                <div className="conteudo bans-table-content-type bans-content-expiry"> 
                                    <p>{ ban.expiry }</p> 
                                </div>
                            </div>
                        </div>
                    ))
                }
                
            </div>

            <div className="conteudo bans-table-footer">
                <div className="conteudo bans-table-page">
                    <button onClick={ previousPage }> Página Anterior </button>
                    <button onClick={ nextPage }> Próxima Página </button>
                </div>
            </div>
        </div>
    );
}