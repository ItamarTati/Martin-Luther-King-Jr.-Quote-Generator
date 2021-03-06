import React, { Component } from 'react';
import './App.css';

class Homepage  extends Component {
  render() {
    let quoteData = this.props.quoteData;
    return (
    <div className="App">
      <h1>Rev. Dr. Martin Luther King Jr.</h1>
      <p>Martin Luther King Jr. (January 15, 1929 – April 4, 1968) was an American Baptist minister and 
        activist who became the most visible spokesperson and leader in the civil rights movement from 1955 
        until his assassination in 1968. Born in Atlanta, King is best known for advancing civil rights through 
        nonviolence and civil disobedience, tactics his Christian beliefs and the nonviolent activism of Mahatma 
        Gandhi helped inspire.</p> 
      
        <p>{quoteData.data[Math.floor(Math.random()* quoteData.data.length)]}</p>          
    </div>
  );
}
}
export default Homepage;