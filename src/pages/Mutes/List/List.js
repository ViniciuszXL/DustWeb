import Axios from 'axios';
import Connection from '../../../backend/Connection';
import React, { useState, useEffect } from 'react';

// CSS //
import './List.css';

export default function List() {
    const [bans, setBans] = useState([]);
    useEffect(() => {
        Axios.get(Connection.getParamentsURL('punishments?type=0&limit=20'))
            .then(res => setBans(res.data));
    }, []);

    return (
        <div className="conteudo bans-table">
            <div className="conteudo bans-table-title">
                <h1>MUTES</h1>
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

                {
                    bans.map(ban => (
                        <div className="conteudo bans-table-content-items">
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
        </div>
    );
}