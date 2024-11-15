import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/shopcontext';

const Productitem = ({ id, name, price, image }) => {
    const { currency } = useContext(ShopContext);

    return (
        <>
            <Link to={`/product/${id}`} className='text-gray cursor-pointer'>
                <div className='overflow-hidden'>
                    <img src={image} alt="" className='hover:scale-110 transition-all ease-in-out' />
                </div>
                <p className='pt-3 pb-1 text-sm'>{name}</p>
                <p className='text-small font-medium'>{currency}{price}</p>
            </Link>
        </>
    );
}

export default Productitem;