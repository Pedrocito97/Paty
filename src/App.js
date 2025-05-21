import React from 'react';
import './index.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <a href="#">Home</a>
        <a href="#">About</a>
      </header>
      <main>
        <h1>Welcome</h1>
        <Form />
      </main>
    </div>
  );
}

export default App;
