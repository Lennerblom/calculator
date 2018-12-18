import React, { Component } from 'react';
import './styles/layout.css';
//import './styles/style.scss';
import numeral from 'numeral';
export default class Calc2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 0,
            a: 0.0,
            b: 0.0,
            opp: 'opp',
            decimal: false,
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
 _percent = (a) => {
     return a/100
 }

//  Number.toFixed(10), may be able to use this for numbers after decimal

_number = (e) => {
  console.log('value, name', e.target.value, e.target.name);
   if(e.target.value === ".") {
       if(this.state.decimal === false) {
           
           this.setState({display: this.state.display + e.target.value, decimal: true});
       }
       else {return};
   }
  if(this.state.opp === 'opp'){
    let numA = e.target.value;
    //numA = numeral(numA);
    console.log('numA=', numA);
    if(this.state.display === 0){
        this.setState({display: numA});
        this.setState({a: numA});
    }
    else {
      numA = this.state.display + numA;
      this.setState({display: numA});
      this.setState({a: numA});
      console.log('numA=', numA);
    }
  }
    if(this.state.opp !== 'opp') {
        let numB = e.target.value.toFixed(10);
        console.log('numB', numB);
        if(this.state.b === 0){
        this.setState({display: numB});
        this.setState({b: numB});
        }
        else {
            this.setState({b: this.state.b + numB});
            this.setState({display: this.state.display + numB})
        }
    }
}
_operator = (e) => {
  if(e.target.value === 'operator'){
      this.setState({decimal: false});
      if(e.target.name === '+'){
        this.setState({opp: '+'});
      }
      if(e.target.name === '-'){
        this.setState({opp: '-'});
      }
      if(e.target.name === '*'){
            this.setState({opp: '*'});
      }
      if(e.target.name === '/'){
            this.setState({opp: '/'});
      }
      if(e.target.name === '%'){
        this.setState({opp: '%'});
  }
      console.log('operator', this.state.opp);
  }
}
  _equals = () => {

     if(this.state.opp === '+'){
        let answer = this._add(this.state.a,this.state.b)
        this.setState({display: answer, a: answer, b: 0, opp: 'opp'});
        console.log('display', this.state.display);
     }
     if(this.state.opp === '-'){
         console.log('a,b', this.state.a,this.state.b)
        let answer = this._sub(this.state.a,this.state.b)
        this.setState({display: answer, a: answer, b: 0, opp: 'opp'});
     }
     if(this.state.opp === '*'){
        let answer = this._mult(this.state.a,this.state.b)
        this.setState({display: answer, a: answer, b: 0, opp: 'opp'});
     }
     if(this.state.opp === '/'){
        let answer = this._div(this.state.a,this.state.b)
        this.setState({display: answer, a: answer, b: 0, opp: 'opp'});
     }
     if(this.state.opp === '%'){
        let answer = this._percent(this.state.a)
        this.setState({display: answer, a: answer, b: 0, opp: 'opp'});
     }

      
  }
  _clear = () => {

      this.setState({display: 0, a: 0, b: 0, opp: 'opp'});
      console.log(this.state);
  }

    render() {

        return (
          <div className="calculator container5">
            <div className="display" value={this.state.display}>{this.state.display}</div>

                  <button onClick={this._operator} id="plus" value="operator" name="+">+</button>
                  <button onClick={this._operator} id="minus" value="operator" name="-">-</button>
                  <button onClick={this._operator} id="multiply" value="operator" name="*">x</button>
                  <button onClick={this._operator} id="divide" value="operator" name="/">/</button>
                  <button name="%" onClick={this._operator} id="percent" value={"operator"}>%</button>
                  <button onClick={this._number} id="seven" value={7}>7</button>
                  <button onClick={this._number} id="eight" value={8}>8</button>
                  <button onClick={this._number} id="nine" value={9}>9</button>
                  <button onClick={this._number} id="four" value={4}>4</button>
                  <button onClick={this._number} id="five" value={5}>5</button>
                  <button onClick={this._number} id="six" value={6}>6</button>
                  <button onClick={this._number} id="one" value={1}>1</button>
                  <button onClick={this._number} id="two" value={2}>2</button>
                  <button onClick={this._number} id="three" value={3}>3</button>
                  <button onClick={this._number} id="zero" value={0}>0</button>
                  <button onClick={this._number} id="period" value='.'>.</button>
                  <button name="clear" onClick={this._clear} id="clear" value={0}>AC</button>
                  <button name="equals" onClick={this._equals} id="equals" value={"="}>=</button>


        </div>
        
        );
    }
}