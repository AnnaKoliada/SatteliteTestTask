import React, { useState } from 'react';
import { connect } from 'react-redux';
import InputForm from './InputForm';
import { useHistory } from 'react-router-dom';
import { setWordDataParams } from '../../redux/wordDataReducer';

type Props = {
  word: string;
  setWordDataParams: (inputValue: string, history: any) => void;
};

function InputFormComponent(props: Props ) {
  const [inputValue, setInputValue] = useState('');
  const history = useHistory();

  const searchWord = (): void => {
    props.setWordDataParams(inputValue, history);
  };

  return (
    <InputForm inputValue={inputValue} setInputValue={setInputValue} searchWord={searchWord} />
  );
}
const mapStateToProps = (state: { word: { word: any } }) => {
  return {
    word: state.word.word,
  };
};
export default connect(mapStateToProps, { setWordDataParams })(InputFormComponent);
