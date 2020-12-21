import React from 'react';
import { useTranslation } from 'react-i18next';

import { Form, FormGroup, Label, Button, Container } from 'reactstrap';

import * as Input from '../../components/Form/Input';

import styles from './styles.module.scss';

const Signin = () => {
    const { t, i18n } = useTranslation();

    const handleChangeLang = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return (
        <Container className="container-box-col">
            <Form className={styles.form}>
                <h1 className={styles.title}>{t('signin.title')}</h1>
                <hr className="red_line" />
                <FormGroup>
                    <Label for="user-email">{t('signin.fields.email')}</Label>
                    <Input.Text id="user-email" placeholder={t('signin.fields.placeholders.email')} />
                </FormGroup>
                <FormGroup>
                    <div className={styles.label_box}>
                        <Label for="user-pass">{t('signin.fields.password')}</Label>
                        <a href="/#">{t('signin.forgotPassword')}</a>
                    </div>

                    <Input.Password id="user-pass" placeholder={t('signin.fields.placeholders.password')} />
                </FormGroup>

                <Button className={styles.signin} block>
                    {t('signin.buttons.login')}
                </Button>
                <hr />

                <div className={styles.signup_box}>
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
        </Container>
    );
};

export default Signin;
