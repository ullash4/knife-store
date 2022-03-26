import React from 'react';
import { Button } from 'react-bootstrap';
import { GiCardRandom } from "react-icons/gi";
import { MdDelete } from "react-icons/md";
import './Cart.css'

const Cart = ({carts, clearCarts, randomSelect}) => {
    return (
        <div className='bg-u-primary p-3 rounded-u'>
            <h4>Order Summary</h4>
            <h5>Selected Items: {carts.length}</h5>
            {carts.map((item) => (
                <h5>{item.name}</h5>
            ))}
            <Button className='btn btn-dark m-3' onClick={()=>randomSelect(carts)}>Randomly One <GiCardRandom className='fs-5'></GiCardRandom> </Button> <br></br>
            <Button className='btn btn-dark m-3 px-4' onClick={clearCarts}>Clear All<MdDelete className='fs-5 text-light'></MdDelete> </Button>
        </div>
    );
};

export default Cart;