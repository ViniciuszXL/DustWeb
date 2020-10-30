import Axios from 'axios';
import Connection from '../../../backend/Connection';
import React, { useState, useEffect } from 'react';

// Image //
import load from '../../../assets/gifs/carregamento.gif';

// CSS //
import './List.css';

export default function List() {
    const schemaZero = Connection.getParamentsURL('punishments?schema=0&type=1&page=');
    const schemaOne = Connection.getParamentsURL('punishments?schema=1&type=1');
    var [bans, setBans] = useState([]);

    const page = parseInt(localStorage.getItem('@dust-web/page-bans'));
    const maxPage = parseInt(localStorage.getItem('@dust-web/maxPage-bans'));

    useEffect(() => {
        localStorage.removeItem('@dust-web/page-bans');
        localStorage.removeItem('@dust-web/maxPage-bans');

        localStorage.setItem('@dust-web/page-bans', 1);
        Axios.get(schemaOne).then(res => {
            localStorage.setItem('@dust-web/maxPage-bans', res.data.maxPage);
        });

        var interval = setInterval(() => {
            Axios.get(schemaZero + page).then(res => {
                setBans(res.data);
                document.getElementById('bans-table-gif').remove();
                clearInterval(interval);
            }); 
        }, 3500);
    }, []);

    function previousPage(event) {
        event.preventDefault();
        if ((page - 1) < 1)
            return;
        
        localStorage.setItem('@dust-web/page-bans', page - 1);
        Axios.get(schemaZero + (page - 1))
            .then(res => setBans(res.data)); 
    }

    function nextPage(event) {
        event.preventDefault();
        if ((page + 1) > maxPage) 
            return;
        
        localStorage.setItem('@dust-web/page-bans', page + 1);
        Axios.get(schemaZero + (page + 1)).then(res => setBans(res.data)); 
    }

    return (
        <div className="conteudo bans-table">
            <div className="conteudo bans-table-title">
                <h1>BANIMENTOS ({ page }/{ maxPage })</h1>
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
                    <img src={ load }/>
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