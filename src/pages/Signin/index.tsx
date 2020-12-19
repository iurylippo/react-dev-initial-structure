import React from 'react';

import { Form, FormGroup, Label, Button } from 'reactstrap';

import * as Input from '../../components/Form/Input';

import styles from './styles.module.scss';

const Signin = () => {
  return (
    <div className={styles.container}>
      
      
      <Form className={styles.form}>
      <h1 className={styles.title}>
        Acessar Conta
      </h1>
      <hr className="red_line"></hr>
        <FormGroup >
          <Label for="user-email">E-mail</Label>
          <Input.Text 
            id="user-email"
            placeholder="informe seu e-mail"
          />
        </FormGroup>
        <FormGroup >
          <div className={styles.label_box}>
            <Label for="user-pass">Senha</Label>
            <a>esqueceu a senha?</a>
          </div>
          
          <Input.Password
            id="user-pass"
          />
        </FormGroup>
        
        <Button className={styles.signin} block={true}>Entrar</Button>
        <hr></hr>
        
        <div className={styles.signup_box}>
            <p className={styles.signup_title}>
              Nao possui uma conta?
            </p>
            <a className={styles.signup_link}>Registrar</a>
        </div>
      </Form>
    </div>
  );
}

export default Signin;