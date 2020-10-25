import React from 'react';

// Pages //
import Header from '../Global/Header/Header';
import Menu from '../Global/Menu/Menu';
import Footer from '../Global/Footer/Footer';

// Groups //
import Masters from './Masters/Masters';
import Administrators from './Administrators/Administrators';
import Developers from './Developers/Developers';
import Moderators from './Moderators/Moderators';

// CSS //
import './Staff.css';

export default function Staff() {
    return (
        <div>
            <Header />
            <Menu />

            <div className="conteudo staff">
                <Masters />
                <Administrators />
                <Developers />
                <Moderators />
            </div>

            <Footer />
        </div>
    );
}