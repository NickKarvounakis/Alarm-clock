import React from 'react';
import { Provider } from 'react-redux'
import  './App.css';
import store from './store/'
import Body from './Components/body.js'

const App = () => {
  return (
    <div className="App">
      <Provider store={store} >
        <Body />
      </Provider>
    </div>
  );
}



export default (App);
