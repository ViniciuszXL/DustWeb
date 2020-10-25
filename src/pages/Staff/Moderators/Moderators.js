import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Connection from '../../../backend/Connection';

export default function Moderators() {
    const [mods, setMods] = useState([]);
    useEffect(() => {
        Axios.get(Connection.getParamentsURL('staffers?group=mods')).then(res => setMods(res.data))
    }, []);

    return (
        <div className="conteudo staff-content">
            <div className="conteudo staff-title"> <h1>MODERADORES</h1> </div>
            {
                mods.map(mod => (
                    <div className="conteudo staff-content-item" key={ mod.name }>
                        <img src={ mod.url } alt={ mod.name } />
                        <p>{ mod.name }</p>
                    </div>
                ))
            }
        </div>
    );
}