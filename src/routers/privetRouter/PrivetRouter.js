import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivetRouter = ({children}) => {
    
    const {user,loading} = useContext(AuthContext)
    const location =useLocation();
    console.log(user);
    if(loading){
        return <div className='d-flex justify-content-center
        '><Spinner animation="border" variant="primary" /></div>
    }
    if(!user){
        return <Navigate to='/login' state={{from:location}}></Navigate>
    }
    return children;
};

export default PrivetRouter;