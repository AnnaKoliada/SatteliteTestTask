import React, { useState } from 'react';
import { connect } from 'react-redux';
import { StateFromReducersMapObject } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { withRedirect } from '../../../hoc/withRedirect';
import { updateIsFetching } from '../../../redux/CommonReducer';
// import { setWordData } from '../../../redux/wordDataReducer';
import InputForm from '../InputForm';
import s from './InputFormComponent.module.css';
import { useHistory } from 'react-router-dom';
import { setWordAC } from '../../../redux/wordReducer';
import { setWordDataParams } from '../../../redux/wordDataReducer';

function InputFormComponent(props: any) {
  const [inputValue, setInputValue] = useState('');
  const history = useHistory();

  const searchWord = () => {
    console.log('jkjnjkn');
    props.setWordDataParams(inputValue, history );
  };

  return (
    <InputForm inputValue={inputValue} setInputValue={setInputValue} searchWord={searchWord} />
  );
}
const mapStateToProps = (state: { word: { word: any } } ) => {
  return {
    word: state.word.word,
  };
};
export default connect(mapStateToProps, { updateIsFetching, setWordAC, setWordDataParams })(InputFormComponent);
