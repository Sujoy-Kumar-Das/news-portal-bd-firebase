import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
const Login = () => {
    
    const {login,setLoading} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    // console.log(from)
    const handleLogin = event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email,password)
        .then(result=>{
            const user= result.user;
            console.log(user)
            form.reset();
            if(user.emailVerified){
                navigate(from,{replace:true})
            }
            else{
                toast.error('Your email address is not verified please verifie your email address.')
            }
        
        })
        .catch(e=>console.error('error:',e))
        .finally(()=>{
            setLoading(false)
        })
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