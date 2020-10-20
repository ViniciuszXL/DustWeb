import React from 'react';
import ReactDOM from 'react-dom';

// Page //
import Home from './pages/Home/Home';

// Service Worker //
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>,

    document.getElementById('root')
);

serviceWorker.unregister();
