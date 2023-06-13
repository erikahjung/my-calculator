import React from "react";
import { Button } from "./Button.jsx";

export const Keypad = ({ onClick }) => {
  return (
    <div id='keypad'>
      <Button symbol='7' onClick={onClick}></Button>
      <Button symbol='8' onClick={onClick}></Button>
      <Button symbol='9' onClick={onClick}></Button>
      <Button symbol='+' onClick={onClick}></Button>

      <Button symbol='4' onClick={onClick}></Button>
      <Button symbol='5' onClick={onClick}></Button>
      <Button symbol='6' onClick={onClick}></Button>
      <Button symbol='-' onClick={onClick}></Button>

      <Button symbol='1' onClick={onClick}></Button>
      <Button symbol='2' onClick={onClick}></Button>
      <Button symbol='3' onClick={onClick}></Button>
      <Button symbol='*' onClick={onClick}></Button>
      
      <Button symbol='0' onClick={onClick}></Button>
      <Button symbol='C' onClick={onClick}></Button>
      <Button symbol='=' onClick={onClick}></Button>
      <Button symbol='/' onClick={onClick}></Button>
    </div>
  )
};