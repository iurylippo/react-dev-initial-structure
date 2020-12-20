import React, { FunctionComponent } from 'react';
// import Input from '../../Input';
import { Input, InputProps } from 'reactstrap';
import Form from '.';

const Text = ({ ...props }: InputProps) => <Input {...props} type="text" />;

export default Text;
