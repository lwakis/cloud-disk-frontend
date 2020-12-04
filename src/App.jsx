import React from 'react';
import Navbar from "./components/navbar";
import {BrowserRouter} from "react-router-dom";


import './app.scss'

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Navbar/>
            </div>
        </BrowserRouter>
    );
}

export default App;
