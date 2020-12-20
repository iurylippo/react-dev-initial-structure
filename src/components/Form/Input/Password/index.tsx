import React from 'react';

import { Input, InputProps } from 'reactstrap';

const Password = ({ ...props }: InputProps) => <Input {...props} type="password" />;

export default Password;
