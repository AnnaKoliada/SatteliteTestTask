import React from 'react';
import loader from '../../../assets/images/loader.svg';
import s from './Loader.module.css';

const Loader = (): JSX.Element => {
  return (
    <div className={s.loader}>
      <img src={loader} alt='loading...' />
    </div>
  );
};
export default Loader;
