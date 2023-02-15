import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SummryCard from '../Shared/summeryCard/SummryCard';
const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            {/* {allNews.map(news => console.log(news))} */}
            {allNews.map(news => <SummryCard key={news._id} news={news}></SummryCard>)}
        </div>
    );
};

export default Home;