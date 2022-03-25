import React from 'react';
import { Button } from 'react-bootstrap';

const Cart = ({carts, clearCarts, randomSelect}) => {
    console.log(carts);
    
    return (
        <div>
            <h5>Selected Items: {carts.length}</h5>
            {carts.map((item) => (
                <h1>{item.name}</h1>
            ))}
            <Button className='btn btn-primary m-3' onClick={()=>randomSelect(carts)}>Randomly One</Button> <br></br>
            <Button className='btn btn-primary m-3 px-5' onClick={clearCarts}>Clear</Button>
        </div>
    );
};

export default Cart;