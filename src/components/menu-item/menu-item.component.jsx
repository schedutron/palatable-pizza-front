import React from 'react';
import './menu-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

const MenuItem = ({name, image_link, price, description, size}) => (

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
    <CustomButton inverted>Add to Cart</CustomButton>
    
  </div>
)

export default MenuItem;
