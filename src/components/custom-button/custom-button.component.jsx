import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
  var additionalStyle = '';
  if (isGoogleSignIn) {
    additionalStyle = 'google-sign-in';
  } else if (inverted) {
    additionalStyle = 'inverted';
  }

  return (
    <button
    className={`${additionalStyle} custom-button`}
    {...otherProps}
    >
      {children}
    </button>
  )
};

export default CustomButton;
