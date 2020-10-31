import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import Utilitaries from '../../../backend/Utilitaries';

// Image //
import load from '../../../assets/gifs/carregamento.gif';

// CSS //
import './List.css';

export default function List() {
    var [mutes, setMutes] = useState([]);

    useEffect(() => {
        Utilitaries.removeItem('page-mute');
        Utilitaries.removeItem('maxPage-mute');

        Axios.get(Utilitaries.getPunishments(1, 0, 1)).then(res => {
            var data = res.data;
            if (data === undefined)
                return;
            
            Utilitaries.setStorage('page-mute', 1);
            Utilitaries.setStorage('maxPage-mute', data.maxPage);
        });

        var interval = setInterval(() => {
            Utilitaries.modifyHTML('mutes-table-title', 
                '<h1>MUTES (1/' + Utilitaries.getStorage('maxPage-mute') + ') </h1>');

            Axios.get(Utilitaries.getPunishments(0, 0, 1)).then(res => {
                var data = res.data;
                if (data === undefined)
                    return;
                
                try {
                    setMutes(data);
                } finally {
                    Utilitaries.removeDiv('mutes-table-gif');
                    clearInterval(interval);
                }
            }); 
        }, 2500);
    }, []);

    function previousPage(event) {
        event.preventDefault();
        var page = Utilitaries.getStorage('page-mute');
        var maxPage = Utilitaries.getStorage('maxPage-mute');
        if ((page - 1) < 1)
            return;
        
        Utilitaries.setStorage('page-mute', (page - 1));
        Axios.get(Utilitaries.getPunishments(0, 0, (page - 1))).then(res => {
            var data = res.data;
            if (data === undefined)
                return;
            
            setMutes(data);
            Utilitaries.modifyHTML('mutes-table-title', '<h1>MUTES ('+(page-1)+'/'+maxPage+') </h1>');
        }); 
    }

    function nextPage(event) {
        event.preventDefault();
        var page = Utilitaries.getStorage('page-mute');
        var maxPage = Utilitaries.getStorage('maxPage-mute');
        if ((page + 1) > maxPage) 
            return;
        
        Utilitaries.setStorage('page-mute', (page + 1));
        Axios.get(Utilitaries.getPunishments(0, 0, (page + 1))).then(res => {
            var data = res.data;
            if (data === undefined)
                return;
            
            setMutes(data);
            Utilitaries.modifyHTML('mutes-table-title', '<h1>MUTES ('+(page+1)+'/'+maxPage+') </h1>');
        }); 
    }

    return (
        <div className="conteudo mutes-table">
            <div className="conteudo mutes-table-title" id="mutes-table-title">
                <h1>MUTES</h1>
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
                    <img src={ load } alt="Loading" />
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