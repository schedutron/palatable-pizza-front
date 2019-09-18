import React from 'react';
import {Link} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import {ReactComponent as Logo} from '../../assets/pizza.svg';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import './header.styles.scss';
import CartItem from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCurrentUser} from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';

const Header = ({currentUser, hidden}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>

    <div className='options'>
      <Link className='option' to='/about'>ABOUT</Link>
      {
        currentUser ?
        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
        :
        <Link className='option' to='/signin'>SIGN IN</Link>
      }
      <CartItem />
    </div>
    {
      hidden ? null : <CartDropdown />
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
