import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Item = ({product}) => {
    const {name, price, picture} = product;
    console.log(name, price, picture);
    return (
        <div className='col-md-6 col-lg-4'>
            <Card style={{ width: '18rem' }} className='shadow-sm'>
            <Card.Img variant="top" src={picture} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                <p>Price : {price}</p>
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Item;
