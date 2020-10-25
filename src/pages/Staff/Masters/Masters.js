import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Connection from '../../../backend/Connection';

export default function Masters() {
    const [masters, setMasters] = useState([]);
    useEffect(() => {
        Axios.get(Connection.getParamentsURL('staffers?group=masters')).then(res => setMasters(res.data));
    }, []);

    return (
        <div className="conteudo staff-content">
            <div className="conteudo staff-title"> <h1>MASTERS</h1> </div>
            {
                masters.map(master => (
                    <div className="conteudo staff-content-item" key={ master.name }>
                        <img src={ master.url } alt={ master.name } />
                        <p>{ master.name }</p>
                    </div>
                ))
            }
        </div>
    );
}