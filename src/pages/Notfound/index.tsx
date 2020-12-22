import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Container, Button } from 'reactstrap';

import Vetor from './Vetor';

const Notfound = () => {
    const { t } = useTranslation();

    return (
        <Container fluid className="container-box-col">
            <Vetor />
            <Link to="/dashboard">
                <Button>{t('notfound.buttons.backHome')}</Button>
            </Link>
        </Container>
    );
};

export default Notfound;
