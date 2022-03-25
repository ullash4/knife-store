import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Item.css'

const Item = ({product, show}) => {
    const {name, price, picture} = product;
    return (
        <div className='col-md-6 col-lg-4'>
            <Card style={{ width: '18rem' }} className='shadow-sm custom-radius p-2'>
            <Card.Img variant="top" src={picture} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                <p>Price : {price}</p>
                </Card.Text>
                <Button variant="primary" onClick={()=>show(product)}>Add to Cart</Button>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Item;
