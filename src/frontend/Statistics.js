import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import connection from '../backend/Connection';
import axios from 'axios';

import '../css/Statistics.css';

export default function Statistics() {
  const [tops, setData] = useState([]);
  const [record, setRecord] = useState([]);
  const [registred, setRegistred] = useState();

  const coinsTop = connection.getParamentsURL('top_players?type=coins&limit=5');
  const recordURL = connection.getParamentsURL('onlinePlayers?type=peakOfPlayerRecord');
  const registredURL = connection.getParamentsURL('user_players?type=registred');

  useEffect(() => {
    axios.get(coinsTop).then(response => setData(response.data));
    axios.get(recordURL).then(rec => setRecord(rec.data));
    axios.get(registredURL).then(res => setRegistred(res.data.registred));
  }, []);
  

  return (
    <div className="conteudo estatisticas">
        <div className="conteudo estatisticas-block">
          <div className="conteudo estatisticas-name"> <p>Estatísticas do servidor</p> </div>
          <div className="conteudo estatisticas-content">
            <div className="conteudo estatisticas-content-item">
              <h3>Recorde de players: </h3>
              {
                record.map(rec => (
                  <p className="estatisticas-content-item-value">{rec.pico} ({rec.dateFormat})</p>
                ))
              }
            </div>
            <div className="conteudo estatisticas-content-item">
              <h3>Jogadores registrados: </h3>
              <p className="estatisticas-content-item-value">
                <NumberFormat value={registred} displayType={'text'} thousandSeparator={true} />
              </p>
            </div>
          </div>
        </div>

        <div className="conteudo estatisticas-block">
          <div className="conteudo estatisticas-name"> <p>ESTATÍSTICAS (TOP 5 COINS)</p> </div>
          <div className="conteudo estatisticas-content">
            {
              tops.map(top => (
                <div className="conteudo estatisticas-content-item">
                  <h3>{top.name}</h3>
                  <p className="estatisticas-content-item-value">
                    <NumberFormat value={top.coins} displayType={'text'} thousandSeparator={true} />
                  </p>
                </div>
              ))
            }
          </div>
        </div>
    </div>
  );
}
