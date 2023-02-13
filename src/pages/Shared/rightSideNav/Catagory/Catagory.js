import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Catagory = () => {
    const allNewsCatagory = useLoaderData();
    return (
        <div>
            <h1>Total {allNewsCatagory.length} catagory found</h1>
        </div>
    );
};

export default Catagory;