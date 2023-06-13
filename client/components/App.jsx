import React, { useState } from 'react';
import { Display } from './Display.jsx';
import { Button } from './Button.jsx';

const App = () => {
  const [display, setDisplay] = useState('0');
  const [calculation, setCalculation] = useState('');

  const calculate = () => {
    try {
      const total = eval(calculation);
      setDisplay(String(total));
      setCalculation(String(total));
    } catch (e) {
      console.log(e);
    }
  }

  const onClick = (e) => {
    switch (e.target.value) {
      case '+': 
        setCalculation((x) => x + '+');
        break;
      case '-':
        setCalculation((x) => x + '-');
        break;
      case '/':
        setCalculation((x) => x + '/');
        break;
      case '*':
        setCalculation((x) => x + '*');
        break;
      case '=':
        calculate();
        setCalculation('');
        break;
      case 'C':
        setDisplay('0');
        setCalculation('');
        break;
      default:
        setDisplay(e.target.value);
        setCalculation((x) => x + e.target.value);
    }
    console.log(calculation);
  }

  return (
    <>
      <h1>My Calculator</h1>
      <Display number={display}></Display>
      <Button symbol='1' onClick={onClick}></Button>
      <Button symbol='2' onClick={onClick}></Button>
      <Button symbol='3' onClick={onClick}></Button>
      <Button symbol='4' onClick={onClick}></Button>
      <Button symbol='5' onClick={onClick}></Button>
      <Button symbol='6' onClick={onClick}></Button>
      <Button symbol='7' onClick={onClick}></Button>
      <Button symbol='8' onClick={onClick}></Button>
      <Button symbol='9' onClick={onClick}></Button>
      <Button symbol='0' onClick={onClick}></Button>
      <Button symbol='+' onClick={onClick}></Button>
      <Button symbol='-' onClick={onClick}></Button>
      <Button symbol='/' onClick={onClick}></Button>
      <Button symbol='*' onClick={onClick}></Button>
      <Button symbol='=' onClick={onClick}></Button>
      <Button symbol='C' onClick={onClick}></Button>
    </>
  )
}

export default App;