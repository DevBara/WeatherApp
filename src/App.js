import React from 'react';
import './App.css';
import axios from 'axios'
import Days from './components/Days'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Days />
      </header>
    </div>
  );
}

export default App;
