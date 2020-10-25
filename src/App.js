import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Routes //
import Home from './pages/Home/Home';
import Staff from './pages/Staff/Staff';
import Bans from './pages/Bans/Bans';

export default function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={ Home } />
            <Route path="/staff" component={ Staff } />
            <Route path="/bans" component={ Bans } />
        </BrowserRouter>
    );
}