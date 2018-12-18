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
        <Calc2 className="calcOne"/>
        <Calc2 className="calculator2 calc2"/>
        <Calc2 className="calc3"/>
        <Calc2 className="calculator2 calc4"/>
      </div>
      </Fragment>
    );
  }
}

export default App;
