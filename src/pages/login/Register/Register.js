import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Register = () => {
    const {reginterUser,updateUserProfile,verifyEmail} = useContext(AuthContext)
    const [cheacked,setChecked]=useState(false);
 
    const handleRegForm = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        const name = form.name.value;
        // console.log(email,password,photoURL,name)
        reginterUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            form.reset();
            updateUser(name,photoURL)
            emailVerification();
            toast.success('Please check your email address and verify ')
        })
        .catch(error=>{
            console.error('error:',error)
        })
    }
    const emailVerification = ()=>{
        verifyEmail()
        .then(()=>{})
        .catch(error=>console.error('error:',error))

    }
    const updateUser = (name,photoURL)=>{
        const profile = {displayName:name,photoURL:photoURL}
        updateUserProfile(profile)
        // console.log(profile)
        .then((result)=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>console.log('error:',error))
    }

    const handleChecked = event=>{
        setChecked(event.target.checked);
    }
    return (
        <Form onSubmit={handleRegForm}>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" name='name' placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhotoURL">
            <Form.Label>PhotoURL</Form.Label>
            <Form.Control type="text" name='photoURL' placeholder="Photo URL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control required type="email" name='email' placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control required type="password" name='password' placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check 
            type="checkbox" 
            onClick={handleChecked}
            label={ <Link to='/terms' className='text-decoration-none'>Accept our terms and contions
            </Link>} />
        </Form.Group>

        <Button disabled={!cheacked} variant="primary" type="submit" >Register</Button>
    </Form>
    );
};

export default Register;