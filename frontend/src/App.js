import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
//헤더
import ButtonAppBar from './components/Header'

//react-trello
import data from "./data/data.json";
import Board from "react-trello";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.text())
      .then(message => {
        setMessage(message);
      });
  }, [])
  
  return (
    // <ButtonAppBar>
    // </ButtonAppBar>

    <div className="App">
        <h1>react-trello demo</h1>
        <Board data={data} draggable />
    </div>
  )
}

export default App;