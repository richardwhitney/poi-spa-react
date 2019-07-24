import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonExampleButton from './components/examples/btn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ButtonExampleButton/>

      <button className="ui button" role="button">Btn with Semantic-UI</button>
    </div>
  );
}

export default App;
