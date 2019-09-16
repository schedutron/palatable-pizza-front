import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/pizza.svg';

import {connect} from 'react-redux';
import './header.styles.scss';


const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>

    <div className='options'>
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/contact'>CONTACT</Link>
      <Link className='option' to='/signin'>SIGN IN</Link>
    </div>
  </div>
)

export default Header;
