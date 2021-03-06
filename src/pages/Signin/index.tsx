import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Form, FormGroup, Label, Button, Container } from 'reactstrap';

import * as Input from '../../components/Form/Input';

import styles from './styles.module.scss';
import signinValidade from './validate';
import { StoreState } from '../../store/createStore';
import { signInRequest } from '../../store/modules/auth/actions';
import Loading from '../../components/Loading';

const Signin = () => {
    const { t, i18n } = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { loadingSigninRequest, isSignin } = useSelector((state: StoreState) => state.auth);
    const dispacth = useDispatch();

    const handleChangeLang = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    const getData = () => {
        return {
            email,
            password,
        };
    };

    const handleSignin = () => {
        if (signinValidade(getData())) {
            dispacth(signInRequest(getData()));
        }
    };

    if (isSignin) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <Container className="container-box-col">
            <Form className={styles.form}>
                <h1 className={styles.title}>{t('signin.title')}</h1>
                <hr className="red_line" />
                <FormGroup>
                    <Label for="user-email">{t('signin.fields.email')}</Label>
                    <Input.Email
                        id="user-email"
                        placeholder={t('signin.fields.placeholders.email')}
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </FormGroup>
                <FormGroup>
                    <div className={styles.label_box}>
                        <Label for="user-pass">{t('signin.fields.password')}</Label>
                        <a href="/#">{t('signin.forgotPassword')}</a>
                    </div>

                    <Input.Password
                        id="user-pass"
                        placeholder={t('signin.fields.placeholders.password')}
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </FormGroup>

                <Button onClick={handleSignin} block>
                    {t('signin.buttons.login')}
                </Button>

                <hr />

                <div className={`flex-col-center ${styles.signup_box}`}>
                    <p className={styles.signup_title}>{t('signin.dontHaveAccount')}</p>
                    <a href="/#" className={styles.signup_link}>
                        {t('signin.buttons.createAccount')}
                    </a>
                </div>
            </Form>

            <Container>
                <Button onClick={() => handleChangeLang('pt')}>Pt</Button>
                <Button onClick={() => handleChangeLang('en')}>En</Button>
            </Container>
            <Loading loading={loadingSigninRequest} />
        </Container>
    );
};

export default Signin;
