import React, { Component } from 'react';
import './styles/layout.css';
export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 0,
            a: 0,
            b: 0,
            opp: '',
        }
    }
calFunction = (e) => {
    console.log(e.target.value, e.target.name);
    if(e.target.value === "operator"){
      if(e.target.name === "add"){
   let a = this.state.display;
   this.setState({display: 0});
    console.log('add', a);
    }
    if(e.target.name === "subtract"){
    console.log('subtract');
    }
    if(e.target.name === "multiply"){
    console.log('multiply');
    }
    if(e.target.name === "divide"){
    console.log('divide');
  }
}
   else if(e.target.name === "equals"){
      let a = 7;
      let b = this.state.display;
      this.setState({display: this._add(a,b)});
  }

  if(e.target.name === 'numbers'){
      let num = e.target.value;
      console.log('number', num);
      if(this.state.display === 0){
          this.setState({display: num});
      }
      else {
      this.setState({display: this.state.display + num});
      }
  }
    else if(e.target.name === "clear") {
      this.setState({display: 0});
  }
}
_number = (e) => {
    let num = e.target.value;
    console.log('number', num);
    if(this.state.display === 0){
        this.setState({display: num});
    }
    else {
    this.setState({display: this.state.display + num});
    }
}
    _add = (a,b) => {
        return parseInt(a) + parseInt(b);
        }
      _sub = (a,b) => {
          return a - b;
      }
      _mult = (a,b) => {
        return a * b;
      }
      _div = (a,b) => {
          return a/b;
      }
//onClick={this._number}
    render() {
        return (
            <div className="calculator">
              <div className="display" value={this.state.display}>{this.state.display}</div>
              <div className="keys" onClick={this.calFunction}>
                <div className="operator">
                  <button value="operator" name="add">+</button>
                  <button value="operator" name="subtract">-</button>
                  <button value="operator" name="multiply">*</button>
                  <button value="operator" name="divide">/</button>
                </div>
                <div name="numbers" onClick={this._number}> 
                  <button name={7} value={7}>7</button>
                  <button value={8}>8</button>
                  <button value={9}>9</button>
                  <button value={4}>4</button>
                  <button value={5}>5</button>
                  <button value={6}>6</button>
                  <button value={1}>1</button>
                  <button value={2}>2</button>
                  <button value={3}>3</button>
                  <button value={0}>0</button>
                  <button value=".">.</button>
                </div>
                <button name="clear" value={0}>AC</button>
                <button name="equals" value={"="}>=</button>
              </div>
            </div>
        );
    }
}