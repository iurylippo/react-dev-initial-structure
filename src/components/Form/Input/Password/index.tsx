import React from 'react';

import { Input, InputProps } from 'reactstrap';

// import { Container } from './styles';
interface Props extends InputProps {}

const Password = ({ ...props }: Props) => <Input {...props} type="password" />;

export default Password;
