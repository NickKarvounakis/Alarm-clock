import React from 'react';
import { Provider } from 'react-redux'
import  './App.css';
import store from './store/'
import Clock from './Components/clock.js'
import Schedule from './Components/schedule.js'

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <Clock />
        <Schedule />
      </Provider>
    </div>
  );
}

export default App;
