import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

// Components
import LoginComponent from './components/LoginComponent';
import SignUpComponent from './components/SignUpComponent';
import TopBar from './views/MainTopBar';

function App() {
  return (
    <div className="container-form">
      <TopBar />
     {/* <LoginComponent /> */}
    <SignUpComponent />
    </div>
  );
}

export default App;
