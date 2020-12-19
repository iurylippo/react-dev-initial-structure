import React, { PropsWithChildren } from 'react';
// import styles from './styles.module.scss';
interface Props {
}

const Form = ({ children } : PropsWithChildren<Props>) => (
  <form>
    {children}
  </form>
);

export default Form;
