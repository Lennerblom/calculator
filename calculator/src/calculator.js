import React, { Component } from 'react';
import './styles/layout.css';
export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 0,
            a: 0,
            b: 0,
            opp: 'opp',
        }
    }

//   _number = (e) => {
//     if(e.target.name === 'numbers'){
//         let num = e.target.value;
//         console.log('numm', num);
//         if(this.state.display === 0){
//             this.setState({display: num});
//         }
//         else {
//         this.setState({display: this.state.display + num});
//         }
//         if(this.state.a === 0) {
//             this.setState({a: num});
//         }
//         else {
//             this.setState({b: num})
//         }
//         }


        // let num = e.target.value;
        // console.log('number', num);
        // if(this.state.display === 0){
        //     this.setState({display: num});
        // }
        // else {
        // this.setState({display: this.state.display + num});
        // }
    //}

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

  //calFunction = (e) => {
    _number = (e) => {
  console.log('value, name', e.target.value, e.target.name);
  if(this.state.opp === 'opp'){
    let numA = e.target.value;
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
        let numB = e.target.value;
        console.log('numB', numB);
        this.setState({display: numB});
        this.setState({b: numB});
        if(this.state.b !== 0){
            this.setState({b: this.state.b + numB});
        }
    //     this.setState({a: this.state.display});
    //     console.log('a', this.state.a);
    // }
    // else {
        // this.setState({b: this.state.display})
        // console.log('b', this.state.b);
    }
}
_operator = (e) => {
  if(e.target.value === 'operator'){
      //this.setState({display: e.target.name});
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
      console.log('operator', this.state.opp);
    //   this.setState({display: this.state.display + this.state.opp});
  }
}
  _equals = () => {
  // if(e.target.name === 'equals'){
     if(this.state.opp === '+'){
        let answer = this._add(this.state.a,this.state.b)
        this.setState({display: answer});
        this.setState({opp: ''});
        console.log('display', this.state.display);
     }
     if(this.state.opp === '-'){
         console.log('a,b', this.state.a,this.state.b)
        // this.setState({display: this._sub(this.state.a,this.state.b)});
        let answer = this._sub(this.state.a,this.state.b)
        this.setState({display: answer});
        this.setState({opp: ''});
     }
     if(this.state.opp === '*'){
        // this.setState({display: this._mult(this.state.a,this.state.b)});
        let answer = this._mult(this.state.a,this.state.b)
        this.setState({display: answer});
        this.setState({opp: ''});
     }
     if(this.state.opp === '/'){
        // this.setState({display: this._div(this.state.a,this.state.b)});
        let answer = this._div(this.state.a,this.state.b)
        this.setState({display: answer});
        this.setState({opp: ''});
     }
      
  }
  _clear = () => {
   //if(e.target.name === 'clear') {
      this.setState({display: 0, a: 0, b: 0, opp: 'opp'});
      console.log(this.state);
  }
//}


//onClick={this._number}
    render() {
//         const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//   <li>{number}</li>
// );
        return (
            <div className="calculator">
              <div className="display" value={this.state.display}>Display {this.state.display}</div>
              <div>A {this.state.a}</div>
              <div>B {this.state.b}</div>
              <div>Operator {this.state.opp}</div>
              <div className="keys" onClick={this.calFunction}>
                <div className="operator" onClick={this._operator}>
                  <button value="operator" name="+">+</button>
                  <button value="operator" name="-">-</button>
                  <button value="operator" name="*">*</button>
                  <button value="operator" name="/">/</button>
                </div>
                <div name="numbers" onClick={this._number}> 
                  <button value={7}>7</button>
                  <button value={8}>8</button>
                  <button value={9}>9</button>
                <div>
                  <button value={4}>4</button>
                  <button value={5}>5</button>
                  <button value={6}>6</button>
                </div>
                <div>
                  <button value={1}>1</button>
                  <button value={2}>2</button>
                  <button value={3}>3</button>
                </div>
                  <button value={0}>0</button>
                  <button value=".">.</button>
                </div>
                <button name="clear" onClick={this._clear} value={0}>AC</button>
                <button name="equals" onClick={this._equals} value={"="}>=</button>
              </div>
              {/* <ul>{listItems}</ul> */}
            </div>
        );
    }
}