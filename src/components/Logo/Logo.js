import React from 'react';
import LogoImg from '../../assets/digi-logo.svg';
import classes from './Logo.module.css';

const logo = props => {
  return (
    <React.Fragment>
      <img src={LogoImg} alt="logo" className={classes.Logo} />
    </React.Fragment>
  );
};

export default logo;
