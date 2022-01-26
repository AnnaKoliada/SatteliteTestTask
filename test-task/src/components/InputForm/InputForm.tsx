import React from 'react';
import s from './InputForm.module.css';

function InputForm() {
  return (
    <form>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Write...'
          // aria-label='Write...'
          aria-describedby='button-addon2'
        />
        <button className='btn btn-outline-secondary' type='button' id='button-addon2'>
          Search
        </button>
      </div>
    </form>
  );
}

export default InputForm;
