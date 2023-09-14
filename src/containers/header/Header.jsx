import React from 'react';
import { Col, Row, Container, Image } from 'react-bootstrap';
import './header.css';

import bible from '../../assets/result.png';

const Header = () => {
  return (
    <Container className='betel__header d-flex align-items-center justify-content-center' id='acasa'>
      <Row className='px-5 my-3 d-flex align-items-center justify-content-center'>
        <Col sm={6} className='text-center'>
          <h1 className='betel__header-text'>Domnul împărățește! Să se înveselească pământul și să se bucure insulele cele multe!</h1>
          <p className='betel__header-psalm'>Psalmii 97:1</p>
        </Col>
        <Col sm={6} className='d-flex align-items-center justify-content-center justify-content-sm-end'>
          <Image src={bible} fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
