import React, { Component, Fragment } from 'react';
import './App.css';
import Calc2 from './calc2';
import './styles/layout.css';
//import './styles/style.scss';
class App extends Component {
  render() {
    return (
      <Fragment>
      <h1>Calculator</h1>
      <div className="App">
      <div className="calc1"><Calc2/></div>
        <div className="calc2"><Calc2/></div>
        <div className="calc3"><Calc2/></div>
        <div className="calc4"><Calc2/></div>
        
      </div>
      </Fragment>
    );
  }
}

export default App;
