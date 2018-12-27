import React, { Component, Fragment } from 'react';
import './App.scss';
import Calc2 from './calc2';
import './styles/layout.css';
//import './styles/style.scss';
class App extends Component {
  render() {
    return (
      <Fragment>
      <h1>Calculator</h1>
      <div className="App">
        <div className="calc_container blue">
          <div><Calc2/></div>
        </div>
        <div className="calc_container yellow">
          <div><Calc2/></div>
        </div>
        <div className="calc_container red">
          <div><Calc2/></div>
        </div>
        <div className="calc_container green">
          <div><Calc2/></div>
        </div>
        <div className="side_bar">side bar</div>
      </div>
      </Fragment>
    );
  }
}

export default App;
