import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
const Header = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res=> res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='row'>
            <div className="col-md-3 bg-primary">
                <h1>order summary</h1>
            </div>
            <div className="col-md-9">
                <div className="row g-3">
                {
                    products.map(product=> <Item key={product.id} product={product}></Item>)
                }
                </div>
            </div>
        </div>
    );
};

export default Header;