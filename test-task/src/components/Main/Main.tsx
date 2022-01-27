import React from 'react';
import s from './Main.module.css';
import InputForm from '../../components/InputForm/InputForm';
import Loader from '../../components/Common/Loader/Loader';
import { formValues } from 'redux-form';
import InputFormComponent from '../InputForm/InputFormComponent/InputFormComponent';

const Main = (props: any): JSX.Element =>{
  
  return (
    <main className={s.mainContainer}>
      <h1>Dictionary</h1>
      <InputFormComponent />
      {}
    </main>
  );
};

export default Main;
