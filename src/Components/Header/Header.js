import React, { useEffect, useState } from 'react';
const Header = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res=> res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='row'>
            <div className="col-md-4 bg-primary">
                <h1>order summary</h1>
            </div>
            <div className="col-md-8 bg-danger">
                {
                    products.map(product=> console.log(product))
                }
            </div>
        </div>
    );
};

export default Header;