import React from 'react';

// Telas //
import Header from './frontend/Header';
import Menu from './frontend/Menu';
import Address from './frontend/Address';
import OnlinePlayers from './frontend/OnlinePlayers';
import Statistics from './frontend/Statistics';

export default function App() {
  return (

    <div>
      
      <Header />
      <Menu />
      <Address />
      <OnlinePlayers />
      <Statistics />

    </div>

  );
}
