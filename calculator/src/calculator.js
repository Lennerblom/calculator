import React, { Component } from 'react';
import './styles/layout.css';
export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 0,
        }
    }
calFunction = (e) => {
    console.log(e.target.value, e.target.className);
    if(e.target.className === "operator"){
      if(e.target.value === "add"){
   let a = this.state.display;
   this.setState({display: 0});
    console.log('add', a);
    }
    if(e.target.value === "subtract"){
    console.log('subtract');
    }
    if(e.target.value === "multiply"){
    console.log('multiply');
    }
    if(e.target.value === "divide"){
    console.log('divide');
  }
}
   else if(e.target.className === "equals"){
      let a = 7;
      let b = this.state.display;
      this.setState({display: this._add(a,b)});
  }

  if(e.target.className === 'numbers'){
      let num = e.target.value;
      console.log('number', num);
      if(this.state.display === 0){
          this.setState({display: num});
      }
      else {
      this.setState({display: this.state.display + num});
      }
  }
    else if(e.target.className === "clear") {
      this.setState({display: 0});
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
                  <button value="add">+</button>
                  <button value="subtract">-</button>
                  <button value="multiply">*</button>
                  <button value="divide">/</button>
                </div>
                <div ClassName="numbers"> 
                  <button name ={7} value={7}>7</button>
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
                <button className="clear" value={0}>AC</button>
                <button className="equals" value={"="}>=</button>
              </div>
            </div>
        );
    }
}