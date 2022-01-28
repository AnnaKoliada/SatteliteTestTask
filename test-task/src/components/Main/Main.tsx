import React from 'react';
import s from './Main.module.css';
import InputFormComponent from '../InputForm/InputFormComponent';

const Main = (): JSX.Element =>{
  
  return (
    <main className={s.mainContainer}>
      <h1>Dictionary</h1>
      <InputFormComponent />
      {}
    </main>
  );
};

export default Main;
