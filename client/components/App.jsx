import React, { useState } from 'react';
import { Display } from './Display.jsx';
import { Keypad } from './Keypad.jsx';

const App = () => {
  //only display numbers like an analog calculator - BUG: each digit only displays 1 at a time (ex. 100)
  const [display, setDisplay] = useState('0');
  //the mathematical expression is a string
  const [calculation, setCalculation] = useState('');

  //calculate the mathematical expression or clear if it's invalid
  const calculate = () => {
    try {
      const total = eval(calculation);
      setDisplay(String(total));
      setCalculation(String(total));
    } catch (e) {
      console.log(e);
      setDisplay('0');
      setCalculation('');
    }
  }

  const onClick = (e) => {
    switch (e.target.value) {
      case '+': 
        setDisplay('0');
        setCalculation((x) => x + '+');
        break;
      case '-':
        setDisplay('0');
        setCalculation((x) => x + '-');
        break;
      case '/':
        setDisplay('0');
        setCalculation((x) => x + '/');
        break;
      case '*':
        setDisplay('0');
        setCalculation((x) => x + '*');
        break;
      case '=':
        calculate();
        break;
      case 'C':
        setDisplay('0');
        setCalculation('');
        break;
      default:
        setDisplay((num) => num === '0' ? e.target.value : num + e.target.value);
        setCalculation((x) => x + e.target.value);
    }
  }

  return (
    <>
      <h1>My Calculator</h1>
      <Display number={display}></Display>
      <Keypad onClick={onClick}></Keypad>
    </>
  )
}

export default App;