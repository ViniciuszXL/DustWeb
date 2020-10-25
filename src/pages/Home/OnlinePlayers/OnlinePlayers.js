import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Connection from '../../../backend/Connection';

// Page //
import Graphic from './Graphic/Graphic';

// CSS //
import './OnlinePlayers.css';

export default function OnlinePlayers() {
    const [online, setOnline] = useState();

    useEffect(() => {
        let interval = setInterval(() => {
            Axios.get(Connection.getParamentsURL('onlinePlayers?type=serverCurrentOnline'))
                .then(res => setOnline(res.data.online));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="conteudo online-players">
            <div className="conteudo online-players-block">
                <div className="conteudo online-players-title"> <p>Jogadores online</p> </div>
                <div className="conteudo online-players-content">
                    <Graphic />
                    <h1>Há exatamente<span className="color-green"> { online } jogadores </span>online no servidor.</h1>
                </div>
            </div>
        </div>
    );
}
