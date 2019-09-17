import React from 'react';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import './checkout.styles.scss';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = ({cartItems, cartTotal}) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Pizza</span>
      </div>
      <div className='name header-block'>
        <span>Name</span>
      </div>
      <div className='quantity header-block'>
        <span>Quantity</span>
      </div>
      <div className='price header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {
      cartItems.map(cartItem =>
        <CheckoutItem cartItem={cartItem} />)
    }
    <div className='total'>
      <span>TOTAL: €{cartTotal}</span>
    </div>

  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
