import React from 'react';
import { Input, InputProps } from 'reactstrap';

const Text = ({ ...props }: InputProps) => <Input {...props} type="text" />;

export default Text;
