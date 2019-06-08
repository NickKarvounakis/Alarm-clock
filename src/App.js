import React from 'react';
import  './App.css';
import store from './store/'
import Clock from './Components/clock.js'

function App() {
  return (
    <div className="App">
      <Clock store={store}/>
    </div>
  );
}

export default App;
