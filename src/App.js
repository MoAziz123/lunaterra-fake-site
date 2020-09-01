import React from 'react';
import logo from './logo.svg';
import './App.css';
import StartSection from './sections/start-section'
import MainSection from './sections/main-section'
import EndSection from './sections/end-section'
function App() {
  return (
    <div className="App">
     <StartSection/>
     <MainSection/>
     <EndSection/>

    </div>
  );
}

export default App;
