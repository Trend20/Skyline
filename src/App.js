import React from 'react';
import './App.css';
import Description from './components/Description/Description';
import Features from './components/Features/Features';
import Header from './components/Header/Header';
import Team from './components/Team/Team';
import Theme from './components/Theme/Theme';

function App() {
  return (
    <div className="App">
     <Header />
     <Description />
     <Features />
     <Theme />
     <Team />
    </div>
  );
}

export default App;
