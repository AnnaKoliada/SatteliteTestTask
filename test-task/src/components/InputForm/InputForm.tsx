import React from 'react';

type Prop = {
  inputValue: string;
  setInputValue: (arg: string) => void;
  searchWord: () => void;
};

function InputForm(props: Prop): JSX.Element {
  const changeValueInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.searchWord();
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className='input-group mb-3'>
        <input
          name='word'
          type='text'
          className='form-control'
          placeholder='Write...'
          aria-describedby='button-addon2'
          onChange={(e) => changeValueInput(e)}
        />
        <button className='btn btn-outline-secondary' type='submit' id='button-addon2'>
          Search
        </button>
      </div>
    </form>
  );
}

export default InputForm;
