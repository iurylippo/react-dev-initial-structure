import React from 'react';

// import { Container } from './styles';

interface Button {
  label: string,
  onClick?: () => void
}

const Button: React.FC<Button> = ({ label, onClick } : Button)  => {
  // console.log(onClick);
  return (
    <button onClick={onClick}>{label}</button>
  );
}

export default Button;