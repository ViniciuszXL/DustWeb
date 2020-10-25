import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Connection from '../../../backend/Connection';

export default function Administrators() {
    const [admins, setAdmins] = useState([]);
    useEffect(() => {
        Axios.get(Connection.getParamentsURL('staffers?group=admins')).then(res => setAdmins(res.data));
    }, []);

    return (
        <div className="conteudo staff-content">
            <div className="conteudo staff-title"> <h1>ADMINISTRADORES</h1> </div>
            {
                admins.map(admin => (
                    <div className="conteudo staff-content-item" key={ admin.name }>
                        <img src={ admin.url } alt={ admin.name } />
                        <p>{ admin.name }</p>
                    </div>
                ))
            }
        </div>
    );
}