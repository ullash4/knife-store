import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import Cart from '../Cart/Cart'
const Header = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('fakedata.json')
        .then(res=> res.json())
        .then(data=>setProducts(data))
    },[])

    const [carts, setCarts] = useState([])

    const show=(product)=>{
        setCarts([...carts, product]);
    }

    const clearCarts=()=>{
        setCarts([])
    }

    const randomSelect=(carts)=>{
        console.log(carts);
        const num = [Math.floor(Math.random() * carts.length)]
        setCarts([carts[num]])
    }

    return (
        <div className='row'>
            <div className="col-md-3 ">
                <h1>order summary</h1>
                <Cart carts={carts} clearCarts={clearCarts} randomSelect={randomSelect}></Cart>
            </div>
            <div className="col-md-9">
                <div className="row g-3">
                {
                    products.map(product=> <Item key={product.id} product={product} show={show}></Item>)
                }
                </div>
            </div>
        </div>
    );
};

export default Header;