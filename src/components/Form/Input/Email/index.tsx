import React from 'react';
import { Input, InputProps } from 'reactstrap';

const Email = ({ ...props }: InputProps) => <Input {...props} type="email" />;

export default Email;
