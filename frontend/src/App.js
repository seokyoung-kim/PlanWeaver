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
  
  function testConsole(newData) {
    //requst를 발생 시키는 코드를 넣으면 데이터를 다룰 수 있을 것 같습니다.
    console.log("테스트 입니다.");
    console.log(newData);
    console.log(arguments);
  }

  return (
    // <ButtonAppBar>
    // </ButtonAppBar>

    <div className="App">
        <h1>react-trello demo</h1>
        {/* 여기에 사용하려는 API를 추가해서 사용하면 됩니다. */}
        <Board 
          data={data}
          onDataChange={testConsole}
          draggable
        />
    </div>
  )
}

export default App;