import React, { useState } from 'react';
import logo from './logo.svg';
import duck from './duck.jpg';
import './App.css';

function App() {
  const [list, setList] = useState(["gym", "valorant", "kdrama", "UW"]);

  const reorderListAlphabetically = () => {
    const newList = [...list].sort();
    setList(newList);

  };
  return (
    <div className="App">
      <h1>Welcome to my home page! My name is Khoa Tra and I like to play video games.</h1>
      <img src={duck} alt="img error"></img>
      <h3>List of things:</h3>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={reorderListAlphabetically}>Reorder Alphabetically</button>
    </div>
  );
}

export default App;
