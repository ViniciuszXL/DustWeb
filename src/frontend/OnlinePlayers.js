import React, { useEffect, useState } from 'react';
import Connection from '../backend/Connection';
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import '../css/OnlinePlayers.css';
import Axios from 'axios';

export default function OnlinePlayers() {
  const [online, setOnline] = useState();
  const [data, setData] = useState([]);

  const peakOfPlayer = Connection.getParamentsURL('onlinePlayers?type=peakOfPlayer');
  const serverCurrent = Connection.getParamentsURL('onlinePlayers?type=serverCurrent');
  const updatePlayer = 'onlinePlayers?type=update&insert=';

  useEffect(() => {
    Axios.get(peakOfPlayer).then(peak => setData(peak.data));
    Axios.get(serverCurrent).then(current => setOnline(current.data.players));

    const interval = setInterval(() => {
      Axios.get(peakOfPlayer).then(peak => setData(peak.data));
      Axios.get(serverCurrent).then(current => { 
        var responsePlayers = current.data.online;
        if (responsePlayers === undefined || responsePlayers === null || responsePlayers === '') return;

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

          <LineChart width={285} height={220} data={data}
             margin={{ top: 18, right: 0, left: 0, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Pico" stroke="#0095FF" />
          </LineChart>

          <h1>Há exatamente<span className="color-green"> {online} jogadores </span>online no servidor.</h1>
        </div>
      </div>
    </div>
  );
}
