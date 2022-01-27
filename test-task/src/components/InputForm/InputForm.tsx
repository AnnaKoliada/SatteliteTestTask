import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './InputForm.module.css';


function InputForm(props: any) {


  
  const changeValueInput = (e: { target: { value: React.SetStateAction<string> } }) => {
    props.setInputValue(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.searchWord();
  };

  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <div className="input-group mb-3">
        <input
          name="word"
          type="text"
          className="form-control"
          placeholder="Write..."
          aria-describedby="button-addon2"
          onChange={(e)=>changeValueInput(e)}
        />
        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">
          Search
        </button>
      </div>
    </form>
  );
}

export default InputForm;
function useHistory() {
  throw new Error('Function not implemented.');
}

