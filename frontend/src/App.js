import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
//헤더
import ButtonAppBar from './components/Header'

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
    <ButtonAppBar>
      
    </ButtonAppBar>
  )
}

export default App;