import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [catagorys,setCatagorys] =useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/news-catagory')
        .then(res=>res.json())
        .then(data =>setCatagorys(data))
    },[])
    // console.log(catagorys)
    return (
        <div className='position-sticky top-0'>
            <div>
                {
                    catagorys.map(catagory => <p key={catagory.id}>
                        <Link className='text-decoration-none' to={`/catagory/${catagory.id}`}>{catagory.name}</Link>
                    </p> )
                }
            </div>
        </div>
    );
};

export default LeftSideNav;