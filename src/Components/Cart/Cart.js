import React from 'react';

const Cart = ({carts}) => {
    console.log(carts);
    return (
        <div>
            <h5>Selected Items: {carts.length}</h5>
            {carts.map((item) => (
                <h1>{item.name}</h1>
            ))}
        </div>
    );
};

export default Cart;