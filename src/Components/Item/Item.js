import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Item.css'
import { RiShoppingCart2Fill } from "react-icons/ri";

const Item = ({product, show}) => {
    const {name, price, picture} = product;
    return (
        <div className='col-md-6 col-lg-4'>
            <Card className='shadow-sm p-2'>
            <Card.Img variant="top" src={picture} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                <p>Price : {price}</p>
                </Card.Text>
                <Button variant="primary" onClick={()=>show(product)}>Add to Cart <RiShoppingCart2Fill></RiShoppingCart2Fill> </Button>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Item;
