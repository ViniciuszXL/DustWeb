import React, { useEffect, useState } from 'react';
import Connection from '../../../../backend/Connection';
import Axios from 'axios';
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function Graphic() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const peakOfPlayer = Connection.getParamentsURL('onlinePlayers?type=peakOfPlayer');

        Axios.get(peakOfPlayer).then(peak => setData(peak.data));
        const interval = setInterval(() => {
            Axios.get(peakOfPlayer).then(peak => setData(peak.data));
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <LineChart width={ 285 } height={ 220 } data={ data } margin={{ top: 18, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis name="Jogadores online" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Pico" stroke="#0095FF" />
        </LineChart>
    );
}
