import Axios from 'axios';
import Connection from '../../../backend/Connection';
import React, { useState, useEffect } from 'react';

// Image //
import load from '../../../assets/gifs/carregamento.gif';

// CSS //
import './List.css';

export default function List() {
    const schemaZero = Connection.getParamentsURL('punishments?schema=0&type=0&page=');
    const schemaOne = Connection.getParamentsURL('punishments?schema=1&type=0');
    var [mutes, setMutes] = useState([]);

    const page = parseInt(localStorage.getItem('@dust-web/page-mute'));
    const maxPage = parseInt(localStorage.getItem('@dust-web/maxPage-mute'));

    useEffect(() => {
        localStorage.removeItem('@dust-web/page-mute');
        localStorage.removeItem('@dust-web/maxPage-mute');

        localStorage.setItem('@dust-web/page-mute', 1);
        Axios.get(schemaOne).then(res => {
            localStorage.setItem('@dust-web/maxPage-mute', res.data.maxPage);
        });

        var interval = setInterval(() => {
            Axios.get(schemaZero + page).then(res => {
                setMutes(res.data);
                document.getElementById('mutes-table-gif').remove();
                clearInterval(interval);
            }); 
        }, 3500);
    }, []);

    function previousPage(event) {
        event.preventDefault();
        if ((page - 1) < 1)
            return;
        
        localStorage.setItem('@dust-web/page-mute', page - 1);
        Axios.get(schemaZero + (page - 1)).then(res => setMutes(res.data)); 
    }

    function nextPage(event) {
        event.preventDefault();
        if (maxPage === NaN)
            Axios.get(schemaOne).then(res => localStorage.setItem('@dust-web/maxPage-mute', res.data.maxPage));

        if ((page + 1) > maxPage) 
            return;
        
        localStorage.setItem('@dust-web/page-mute', page + 1);
        Axios.get(schemaZero + (page + 1)).then(res => setMutes(res.data)); 
    }

    return (
        <div className="conteudo mutes-table">
            <div className="conteudo mutes-table-title">
                <h1>MUTES ({ page }/{ maxPage })</h1>
            </div>

            <div className="conteudo mutes-table-content">
                <div className="conteudo mutes-table-top">
                    <div className="conteudo mutes-table-top-item mutes-item-player"> <p>Jogador</p> </div>
                    <div className="conteudo mutes-table-top-item mutes-item-player"> <p>Punido por</p> </div>
                    <div className="conteudo mutes-table-top-item mutes-item-reason"> <p>Razão</p> </div>
                    <div className="conteudo mutes-table-top-item mutes-item-type"> <p>Tipo</p> </div>
                    <div className="conteudo mutes-table-top-item mutes-item-date"> <p>Data</p> </div>
                    <div className="conteudo mutes-table-top-item mutes-item-expiry"> <p>Expira</p> </div>
                </div> 

                <div className="conteudo mutes-table-gif" id="mutes-table-gif">
                    <img src={ load }/>
                </div>

                {
                    mutes.map(mute => (
                        <div className="conteudo mutes-table-content-items" key={ mute.key }>
                            <div className="conteudo mutes-table-content-item">
                                <a href={ '/player/' + mute.punished } alt={ mute.punished } 
                                    className="conteudo mutes-table-content-username">
                                    <img src={ mute.punishedUrl } alt={ mute.punished } />
                                    <p>{ mute.punished }</p>
                                </a>

                                <a href={ '/player/' + mute.punisher } alt={ mute.punisher } 
                                    className="conteudo mutes-table-content-username">
                                    <img src={ mute.punisherUrl } alt={ mute.punisher } />
                                    <p>{ mute.punisher }</p>
                                </a>

                                <div className="conteudo mutes-table-content-type mutes-content-reason"> 
                                    <p>{ mute.reason }</p> 
                                </div>
                                <div className="conteudo mutes-table-content-type mutes-content-type"> 
                                    <p>{ mute.type }</p> 
                                </div>
                                <div className="conteudo mutes-table-content-type mutes-content-date"> 
                                    <p>{ mute.date }</p> 
                                </div>
                                <div className="conteudo mutes-table-content-type mutes-content-expiry"> 
                                    <p>{ mute.expiry }</p> 
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="conteudo mutes-table-footer">
                <div className="conteudo mutes-table-page">
                    <button onClick={ previousPage }> Página Anterior </button>
                    <button onClick={ nextPage }> Próxima Página </button>
                </div>
            </div>
        </div>
    );
}