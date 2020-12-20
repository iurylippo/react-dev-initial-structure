import React from 'react';

type Props = {
    children: React.ReactNode;
};

const Form = ({ children }: Props) => <form>{children}</form>;

export default Form;
