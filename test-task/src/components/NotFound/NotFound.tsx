import React from 'react';
import img from '../../assets/images/404.jpg';
import s from './NotFound.module.css';

function NotFound(props: any) {
  return (
      <div>
          <img className={s.img} src={img} alt='Not Found'></img>
      </div>
  );
}

export default NotFound;
