import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h1>This is Tersms and conditon page</h1>
            
            <Link className='text-decoration-none text-white' to='/register'><Button >Go back to Register </Button></Link>
        </div>
    );
};

export default TermsAndConditions;