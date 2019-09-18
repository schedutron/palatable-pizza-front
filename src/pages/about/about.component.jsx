import React from 'react';
import './about.styles.scss';

const AboutPage = () => (
  <div className='about'>
    <h1 className='title'>The Palatable Pizza</h1>
    <p className='content'>
      Ovens at our Theatinerstraße center as the hearths where you will find us cooking pizzas from dough made with care and mozzarella made by hand. The Palatable Pizza's outlook on cooking for others is that when you put genuine love into the preparation of a meal, those who eat it can taste the sentiment behind it. We are thrilled and proud to offer to you pizza and other delicious fare from our hearts made and served with love.
    </p>
    <div className='footer'>
      <div className='footer-img' alt='pizza footer image' 
          style={{
            backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/palatable-pizza.appspot.com/o/pizza-margerita-veg.jpg?alt=media&token=56d81eba-3814-453d-a3d7-931f87320849")`
          }}
      />
    </div>
  </div>
);

export default AboutPage;
