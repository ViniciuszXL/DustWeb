import React from 'react';

// Telas //
import Header from './Header/Header';
import Menu from './Menu/Menu';
import Address from './Address/Address';
import OnlinePlayers from './OnlinePlayers/OnlinePlayers';
import Statistics from './Statistics/Statistics';

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
