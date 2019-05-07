import React, { Component } from 'react';
import './App.css';
import quoteData from './quotes.js';
import Homepage from './Homepage.js'

class App  extends Component {
  render() {
   return ( 
    <div className="App"> 
    <Homepage quoteData={quoteData}/>
    </div>
   );
  
}
}
export default App;
