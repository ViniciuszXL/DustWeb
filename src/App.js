import React from 'react';

// Telas //
import Header from './pages/Home/Header/Header';
import Menu from './pages/Home/Menu/Menu';
import Address from './pages/Home/Address/Address';
import OnlinePlayers from './pages/Home/OnlinePlayers/OnlinePlayers';
import Statistics from './pages/Home/Statistics/Statistics';

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
