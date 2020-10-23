import React, { useEffect, useState } from 'react';
import Connection from '../../../backend/Connection';
import Axios from 'axios';

// Page //
import Graphic from './Graphic/Graphic';

// CSS //
import './OnlinePlayers.css';

export default function OnlinePlayers() {
    const [online, setOnline] = useState();

    const serverCurrent = Connection.getParamentsURL('onlinePlayers?type=serverCurrent');
    const updatePlayer = 'onlinePlayers?type=update&insert=';

    useEffect(() => {
        Axios.get(serverCurrent).then(current => setOnline(current.data.players));
        const interval = setInterval(() => {
            Axios.get(serverCurrent).then(current => { 
                var responsePlayers = current.data.online;
                if (responsePlayers === undefined) return;
                if (responsePlayers === null) return;
                if (responsePlayers === '') return;

                setOnline(responsePlayers);
                Axios.get(Connection.getParamentsURL(updatePlayer + responsePlayers));
            });
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="conteudo online-players">
            <div className="conteudo online-players-block">
                <div className="conteudo online-players-title"> <p>Jogadores online</p> </div>
                <div className="conteudo online-players-content">
                    <Graphic />
                    <h1>Há exatamente<span className="color-green"> {online} jogadores </span>online no servidor.</h1>
                </div>
            </div>
        </div>
    );
}
