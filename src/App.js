import React from 'react';
import logo from './logo.svg';
import Map from './components/Map';
import './App.css';
import MarkersProvider from './contexts/markers/Provider';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <MarkersProvider>
        <Map />
      </MarkersProvider>
    </div>
  );
}

export default App;
