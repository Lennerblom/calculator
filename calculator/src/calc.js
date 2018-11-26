import React, { Component, Fragment } from 'react';
import './styles/layout.css';
export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numButton: Number,
            operator: ['+','-','*','/','=']
        }
    }

  _add = (a,b) => {
    return a + b;
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

//   _doMath = (a,operator,b) => {
//       operator = '+' || '-' ||'*' || '/';
//       return a operator b;
//   }
  //need to click a button and get a value (number) and add to it from the right or take the value and then apply an operator to it followed by another number value
  //

  render() {
      return(
          <Fragment>
              <div class="operators container row">
                <button onClick="this._add">+</button>
                <button onClick="this._sub">-</button>
                <button onClick="this._mult">*</button>
                <button onClick="this._div">/</button>
              </div>
              <div class="numbers container row">
                <button>7</button>
                <button>8</button>
                <button>9</button>
              </div>
              <div class="numbers container row">
                <button>4</button>
                <button>5</button>
                <button>6</button>
              </div>
              <div class="numbers container row">
                <button>1</button>
                <button>2</button>
                <button>3</button>
              </div>
          </Fragment>
      )
  }

}