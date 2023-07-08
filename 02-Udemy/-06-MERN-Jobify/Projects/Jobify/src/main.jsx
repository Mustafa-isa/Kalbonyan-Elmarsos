import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'normalize.css';
import './index.css';
import {AppProvider} from "./context/appContext.jsx";

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(<StrictMode>
            <AppProvider>
                <App />
            </AppProvider>
        </StrictMode>
    )
