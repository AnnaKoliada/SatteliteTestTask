import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props: any) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <div className ='container-fluid'>
      <Link className='navbar-brand' to='/'>Dictionary</Link> 
      </div>
    </nav>
  );
};

export default Header;
