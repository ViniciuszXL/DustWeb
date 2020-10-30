import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Routes //
import Home from './pages/Home/Home';
import Staff from './pages/Staff/Staff';
import Ranking from './pages/Ranking/Ranking';
import Bans from './pages/Bans/Bans';
import Mutes from './pages/Mutes/Mutes';

export default function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={ Home } />
            <Route path="/rank" component={ Ranking } />
            <Route path="/staff" component={ Staff } />
            <Route path="/bans" component={ Bans } />
            <Route path="/mutes" component={ Mutes } />
        </BrowserRouter>
    );
}