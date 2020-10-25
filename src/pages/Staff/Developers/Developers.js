import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Connection from '../../../backend/Connection';

export default function Developers() {
    const [devs, setDevs] = useState([]);
    useEffect(() => {
        Axios.get(Connection.getParamentsURL('staffers?group=devs')).then(res => setDevs(res.data));
    }, []);

    return (
        <div className="conteudo staff-content">
            <div className="conteudo staff-title"> <h1>DESENVOLVEDORES</h1> </div>
            {
                devs.map(dev => (
                    <div className="conteudo staff-content-item" key={ dev.name }>
                        <img src={ dev.url } alt={ dev.name } />
                        <p>{ dev.name }</p>
                    </div>
                ))
            }
        </div>
    );
}