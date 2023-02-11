import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/footer/Footer';
import Header from '../pages/Shared/header/Header';
import LeftSideNav from '../pages/Shared/leftSideNav/LeftSideNav';
import RightSideNav from '../pages/Shared/rightSideNav/RightSideNav';


const Main = () => {
    return (
        <div>
            <Header ></Header>
            <Container className="mt-4">
                <Row>
                    <Col lg='2' className='d-none d-lg-block'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg='7'>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg='3'>
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;