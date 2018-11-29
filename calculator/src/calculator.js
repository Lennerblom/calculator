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

//   _number = (e) => {
//         let num = e.target.value;
//         console.log('number', num);
//         if(this.state.display === 0){
//             this.setState({display: num});
//         }
//         else {
//         this.setState({display: this.state.display + num});
//         }
//     }

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

  calFunction = (e) => {
  console.log(e.target.value, e.target.name);

  if(e.target.name === 'numbers'){
    let num = e.target.value;
    this.setState({display: num});
    if(this.state.a === 0) {
        this.setState({a: num});
    }
    else {
        this.setState({b: num})
    }
    }

  if(e.target.value === "operator"){
      if(e.target.name === "add"){
        this.setState({opp: 'add'});
      }
      if(e.target.name === "subtract"){
        this.setState({opp: 'subtract'});
      }
      if(e.target.name === "multiply"){
            this.setState({opp: 'multiply'});
      }
      if(e.target.name === "divide"){
            this.setState({opp: 'divide'});
      }
  }
   if(e.target.name === "equals"){
     if(this.state.opp === "add"){
        let answer = this._add(this.state.a,this.state.b)
        this.setState({display: answer});
        console.log(this.state.display);
     }
     if(this.state.opp === "subtract"){
        this.setState({display: this._sub(this.state.a,this.state.b)});
     }
     if(this.state.opp === "multiply"){
        this.setState({display: this._mult(this.state.a,this.state.b)});
     }
     if(this.state.opp === "divide"){
        this.setState({display: this._div(this.state.a,this.state.b)});
     }
      
  }

   if(e.target.name === "clear") {
      this.setState({display: 0});
  }
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
                <div name="numbers"> 
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