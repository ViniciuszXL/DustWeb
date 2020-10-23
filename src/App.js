import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Routes //
import Home from './pages/Home/Home';
import Staff from './pages/Staff/Staff';

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={ Home } />
                <Route path="/staff" component={ Staff } />
            </div>
        </BrowserRouter>
    );
}