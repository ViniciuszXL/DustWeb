import React from 'react';
import ReactDOM from 'react-dom';

// App //
import App from './App';

// Service Worker //
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,

    document.getElementById('root')
);

serviceWorker.unregister();
