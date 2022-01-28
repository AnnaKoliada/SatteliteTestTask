import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from '../Common/Loader/Loader';
import Word from './Word';
import s from './Word.module.css';
import { withRouter } from 'react-router';
import { withRedirect } from '../../hoc/withRedirect';
import { compose } from 'redux';
import { setWordDataParams } from '../../redux/wordDataReducer';
import { useLocation, useParams } from 'react-router-dom';
import { setWordAC } from '../../redux/wordReducer';

function WordContainer(props: any) {
  console.log('knlkjnaef', props);
  const location = useLocation();
  const usePar: { word: string } = useParams();
  useEffect(() => {
    if (!props.isChecked ) {
      props.setWordDataParams(usePar.word, null);
    }
  }, [location.pathname]);

  return <Word wordData = {props.wordData} />;
}
const mapStateToProps = (state: any) => {
  return {
    wordData: state.wordData,
    word: state.word.word,
    isChecked: state.word.isChecked,
  };
};
export default compose(
  connect(mapStateToProps, { setWordDataParams, setWordAC }),
  withRedirect,
)(WordContainer) as React.ComponentType;
