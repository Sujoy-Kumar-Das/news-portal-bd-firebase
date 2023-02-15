import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SummryCard from '../../summeryCard/SummryCard';

const Catagory = () => {
    const allNewsCatagory = useLoaderData();
    return (
        <div>
            {allNewsCatagory.map(news=><SummryCard key={news._id} news={news}></SummryCard>)}
        </div>
    );
};

export default Catagory;