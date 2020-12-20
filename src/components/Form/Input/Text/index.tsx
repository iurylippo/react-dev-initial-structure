import React from 'react';
// import Input from '../../Input';
import { Input, InputProps } from 'reactstrap';
import Form from '.';

// import { Container } from './styles';
interface Props extends InputProps {}

const Text = (props: Props) => <Input {...props} type="text" />;

export default Text;
