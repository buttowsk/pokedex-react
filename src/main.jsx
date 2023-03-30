import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import { GlobalStyle } from "./globalStyles/styles.js";
import { BrowserRouter } from 'react-router-dom'
import {HashRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HashRouter>
            <GlobalStyle />
            <App />
        </HashRouter>
    </React.StrictMode>,
)
