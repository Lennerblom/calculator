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

  _number = (e) => {
    if(e.target.name === 'numbers'){
        let num = e.target.value;
        console.log('numm', num);
        if(this.state.display === 0){
            this.setState({display: num});
        }
        else {
        this.setState({display: this.state.display + num});
        }
        if(this.state.a === 0) {
            this.setState({a: num});
        }
        else {
            this.setState({b: num})
        }
        }


        // let num = e.target.value;
        // console.log('number', num);
        // if(this.state.display === 0){
        //     this.setState({display: num});
        // }
        // else {
        // this.setState({display: this.state.display + num});
        // }
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

  calFunction = (e) => {
  console.log('value, name', e.target.value, e.target.name);

  if((e.target.name) === 'numbers'){
    let num = e.target.value;
    if(this.state.display === 0){
        this.setState({display: num});
    }
    else {
    this.setState({display: this.state.display + num});
    }
    if(this.state.a === 0) {
        this.setState({a: this.state.display});
    }
    else {
        this.setState({b: this.state.display})
    }
    }

  if(e.target.value === "operator"){
    //   this.setState({display: ''});
      if(e.target.name === "+"){
        this.setState({opp: '+'});
      }
      if(e.target.name === "-"){
        this.setState({opp: '-'});
      }
      if(e.target.name === "*"){
            this.setState({opp: '*'});
      }
      if(e.target.name === "/"){
            this.setState({opp: '/'});
      }
      this.setState({display: this.state.display + this.state.opp});
  }
   if(e.target.name === "equals"){
     if(this.state.opp === "+"){
        let answer = this._add(this.state.a,this.state.b)
        this.setState({display: answer});
        this.setState({opp: ''});
        console.log('display', this.state.display);
     }
     if(this.state.opp === "-"){
         console.log('a,b', this.state.a,this.state.b)
        // this.setState({display: this._sub(this.state.a,this.state.b)});
        let answer = this._sub(this.state.a,this.state.b)
        this.setState({display: answer});
        this.setState({opp: ''});
     }
     if(this.state.opp === "*"){
        // this.setState({display: this._mult(this.state.a,this.state.b)});
        let answer = this._mult(this.state.a,this.state.b)
        this.setState({display: answer});
        this.setState({opp: ''});
     }
     if(this.state.opp === "/"){
        // this.setState({display: this._div(this.state.a,this.state.b)});
        let answer = this._div(this.state.a,this.state.b)
        this.setState({display: answer});
        this.setState({opp: ''});
     }
      
  }

   if(e.target.name === "clear") {
      this.setState({display: 0, a: 0, b: 0, opp: ''});
  }
}


//onClick={this._number}
    render() {
//         const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//   <li>{number}</li>
// );
        return (
            <div className="calculator">
              <div className="display" value={this.state.display}>{this.state.display}</div>
              <div className="keys" onClick={this.calFunction}>
                <div className="operator">
                  <button value="operator" name="+">+</button>
                  <button value="operator" name="-">-</button>
                  <button value="operator" name="*">*</button>
                  <button value="operator" name="/">/</button>
                </div>
                <div name="numbers" > 
                  <button name="numbers" value={7}>7</button>
                  <button name="numbers" value={8}>8</button>
                  <button name="numbers" value={9}>9</button>
                  <button name="numbers" value={4}>4</button>
                  <button name="numbers" value={5}>5</button>
                  <button name="numbers" value={6}>6</button>
                  <button name="numbers" value={1}>1</button>
                  <button name="numbers" value={2}>2</button>
                  <button name="numbers" value={3}>3</button>
                  <button name="numbers" value={0}>0</button>
                  <button name="numbers" value=".">.</button>
                </div>
                <button name="clear" value={0}>AC</button>
                <button name="equals" value={"="}>=</button>
              </div>
              {/* <ul>{listItems}</ul> */}
            </div>
        );
    }
}