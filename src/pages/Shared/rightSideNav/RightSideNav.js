import React from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { FaGoogle,FaGithub, FaFacebook, FaLinkedin, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import BrandCarusol from '../brandCarusol/BrandCarusol';
const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button  variant="outline-primary" className='mb-2 rounded'> <FaGoogle /> Login with google</Button>
                <Button className='rounded' variant="outline-dark"> <FaGithub /> Login with github</Button>
            </ButtonGroup>
            <div className='mt-3'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2 rounded border'> <FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2 rounded border'> <FaLinkedin /> Linkdin</ListGroup.Item>
                    <ListGroup.Item className='mb-2 rounded border'> <FaWhatsapp /> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2 rounded border'> <FaTwitter /> Twiter</ListGroup.Item>
                    <ListGroup.Item className='mb-2 rounded border'> <FaYoutube /> Youtube</ListGroup.Item>
                </ListGroup>
            </div>
            <BrandCarusol></BrandCarusol>
        </div>
    );
};

export default RightSideNav;