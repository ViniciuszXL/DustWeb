import React from 'react';

// Telas //
import Header from '../Global/Header/Header';
import Menu from '../Global/Menu/Menu';
import Address from './Address/Address';
import OnlinePlayers from './OnlinePlayers/OnlinePlayers';
import Statistics from './Statistics/Statistics';
import News from './News/News';
import Footer from '../Global/Footer/Footer';

export default function Home() {
    return (
        <div>
            <Header />
            <Menu />
            <Address />
            <OnlinePlayers />
            <Statistics />
            <News />
            <Footer />
        </div>
    );
}
