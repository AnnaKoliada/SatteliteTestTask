import React from 'react';
import { Link } from 'react-router-dom';

const Header = (): JSX.Element => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <div className ='container-fluid'>
      <Link className='navbar-brand' to='/'>Dictionary</Link> 
      </div>
    </nav>
  );
};

export default Header;
