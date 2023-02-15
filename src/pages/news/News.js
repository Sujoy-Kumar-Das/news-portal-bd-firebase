import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const newsDetail = useLoaderData();
    console.log(newsDetail)
    const {title,image_url,details,category_id}=newsDetail;
    return (
        <Card className='p-2'>
            <Card.Title>{title}</Card.Title>
            <Card.Img src={image_url} alt="Card image" />
            <Card.Body>
              <Card.Text>
                {details}
              </Card.Text>
              <Link to={`/catagory/${category_id}`}><Button variant="primary">See all catagorys of this news</Button></Link>
            </Card.Body>
            
        </Card>
    );
};

export default News;