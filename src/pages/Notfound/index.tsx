import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'reactstrap';

import Vetor from './Vetor';

const Notfound = () => (
    <Container fluid className="container-box-col">
        <Vetor />
        <Link to="/">
            <Button>Back Home</Button>
        </Link>
    </Container>
);

export default Notfound;
