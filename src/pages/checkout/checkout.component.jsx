import React from 'react';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import './checkout.styles.scss';
import {selectCartItems, selectCartTotal, selectOrderID} from '../../redux/cart/cart.selector';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {setCurrentUser} from '../../redux/user/user.actions';
import {setOrderID} from '../../redux/cart/cart.actions';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import FormInput from '../../components/form-input/form-input.component';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import { API_HOST } from '../../env';

class CheckoutPage extends React.Component {
  constructor(props) {
    super(props);
  }

  postOrderData = async () => {
    const {currentUser, cartItems, cartTotal, orderID, dispatch} = this.props;
    const payload = {
      user: currentUser,
      cart: {
        cartItems: cartItems.map(cartItem => ({id: cartItem.id, quantity: cartItem.quantity})),
        cartTotal,
        orderID
      }
    };

    const response = await fetch(`${API_HOST}/api/orders`, {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(payload)
    });

    const body = await response.json();
    dispatch(setOrderID(body.cart.orderID));
    console.log(body);
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    const {currentUser, dispatch} = this.props;
    if (currentUser) {
      dispatch(setCurrentUser({...currentUser, [name]: value}));
    }
  }

  render() {
    const {cartItems, cartTotal, currentUser} = this.props;
    console.log("currentUser", currentUser);
    return (
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

        <div className='delivery-info'>
          Delivery info
          <form onSubmit={this.handleSubmit}>
            <FormInput
              name='address'
              label='Address'
              value={currentUser ? currentUser.address : ''}
              handleChange={this.handleChange}
              required
            />
            <FormInput
              name='phone_number'
              type='tel'
              handleChange={this.handleChange}
              label='Phone Number'
              value={currentUser ? currentUser.phone_number : ''}
              required
            />
          </form>
          <StripeCheckoutButton onOpened={this.postOrderData} price={cartTotal} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
  currentUser: selectCurrentUser,
  orderID: selectOrderID
});

export default connect(mapStateToProps)(CheckoutPage);
