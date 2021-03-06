import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './core/Routes/Routes';


function App() {

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes></Routes>
      </Router>

    </div>
  );
}

export default App;
