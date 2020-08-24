import React from 'react';
import './App.css';
import axiosRequest from './axiosRequest';

function App() {
  async function test () {
    let testRes = await axiosRequest('keywords');
    console.log(testRes);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Matts a loser. Thats all this website is for.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={test}>Test</button>
      </header>
    </div>
  );
}

export default App;
