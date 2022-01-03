import React from 'react';

import CustomButton from '../cutom-button/custom-button';

import './cart-dropdown.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'></div>
        <CustomButton>Checkout</CustomButton>
    </div>
)

export default CartDropdown;