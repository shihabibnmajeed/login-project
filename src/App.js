import React from 'react';
import './App.css';
import Router2 from './Router2';
import { Authprovider } from './Context/Authcontext';


function App() {
  return (
    <div className="App">
    <Authprovider>
    <Router2/>
    </Authprovider>
    
    </div>
  );
}

export default App;
