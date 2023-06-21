import React from "react";

export const Button = ({ symbol, onClick }) => {
  return (
    <button value={symbol} onClick={onClick}>{symbol}</button>
  )
};