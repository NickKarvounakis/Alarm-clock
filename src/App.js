import React from 'react';
import { Provider } from 'react-redux'
import  './App.css';
import store from './store/'
import Body from './Components/body.js'
import Schedule from './Components/schedule.js'


function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <Body />

      </Provider>
    </div>
  );
}

export default App;
