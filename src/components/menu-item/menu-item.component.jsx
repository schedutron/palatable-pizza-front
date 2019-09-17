import React from 'react';
import {connect} from 'react-redux';
import './menu-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {addItem} from '../../redux/cart/cart.actions';

const MenuItem = ({item, addItem}) => {
  const {name, price, description, image_link, size} = item;
  return (
    <div className={`${size ? size : ''} menu-item`}>
      <div className='item-body'>
        <div
          className='background-image'
          style={{
            backgroundImage: `url(${image_link})`
          }}
        />
        <p className='content'>
          {description}
        </p>
      </div>
      <div className='item-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{`€${price}`}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>Add to Cart</CustomButton>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(MenuItem);
