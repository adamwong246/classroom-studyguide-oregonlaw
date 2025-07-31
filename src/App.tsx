import { useState, useEffect } from 'react';
import LicenseMonGame from './LicenseMonGame';
import './index.css';

function App() {
  return (
    <div className="app">
      <header>
        <h1>LicenseMon</h1>
        <p>Gotta Know Them All! (Oregon Cosmetology Rules)</p>
      </header>
      <LicenseMonGame />
    </div>
  );
}

export default App;
