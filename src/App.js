import React from 'react';
import './App.css';
import Description from './components/Description/Description';
import Features from './components/Features/Features';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
     <Header />
     <Description />
     <Features />
    </div>
  );
}

export default App;
