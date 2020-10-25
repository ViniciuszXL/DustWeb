import React from 'react';

// Pages //
import Header from '../Global/Header/Header';
import Menu from '../Global/Menu/Menu';
import List from './List/List';
import Footer from '../Global/Footer/Footer';

export default function Bans() {
    return (
        <div>
            <Header />
            <Menu />
            <List />
            <Footer />
        </div>
    );
}