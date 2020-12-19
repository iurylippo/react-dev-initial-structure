import React from 'react';
// import Input from '../../Input';
import { Input } from 'reactstrap';
import { InputProps } from 'reactstrap';

// import { Container } from './styles';
interface Props extends InputProps {

}

const Text = ({...props} : Props) => {
  return (
      <Input 
        {...props}
        type="text"
      />
  );
}

export default Text;