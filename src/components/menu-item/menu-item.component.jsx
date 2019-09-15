import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({name, imgLink, price, description, size}) => (

  <div className={`${size} menu-item`}>
    <div className='item-body'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imgLink})`
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
    {/*
      <CustomButton inverted>Add to Cart</CustomButton>
    */}
    
  </div>
)

export default MenuItem;
