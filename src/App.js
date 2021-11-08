import React, { useState } from 'react';
import './App.css';
import * as GamesAPI from './API/api';

function App() {

    const [gameList, setGameList] = useState(null);

    function getList() {
        GamesAPI.getList();
    }

    getList();

    return (
        <div className="App">
            <h1>Hello</h1>
        </div>
    );
}

export default App;
