import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import Routing from './routes';
import TopBar from './views/MainTopBar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="container-form">
      <TopBar />
      <Router>
        <Routing />
      </Router>
    </div>
  );
}

export default App;
