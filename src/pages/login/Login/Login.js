import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
const Login = () => {
    
    const {login} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    console.log(from)
    const handleLogin = event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email,password)
        .then(result=>{
            // const user= result.user;
            // console.log(user)
            form.reset();
            navigate(from,{replace:true})
        
        })
        .catch(e=>console.error('error:',e))
    }
    return (
    <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control required type="email" name='email' placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' placeholder="Password" />
        </Form.Group>
            <Button variant="primary" type="submit">Login</Button>
    </Form>

    );
};

export default Login;