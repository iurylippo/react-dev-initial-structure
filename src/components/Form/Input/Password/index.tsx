import React from 'react';

import { Input } from 'reactstrap';
import { InputProps } from 'reactstrap';

// import { Container } from './styles';
interface Props extends InputProps {

}

const Password =  ({...props} : Props) => {
  return (
      <Input
        {...props}
        type="password"
      />
  );
}

export default Password;