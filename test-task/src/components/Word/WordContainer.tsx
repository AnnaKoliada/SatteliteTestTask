import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Word from './Word';
import { withRedirect } from '../../hoc/withRedirect';
import { compose } from 'redux';
import { setWordDataParams } from '../../redux/wordDataReducer';
import { useLocation, useParams } from 'react-router-dom';
import { setWordAC } from '../../redux/wordReducer';

type Props = {
  wordData: any[];
  word: string;
  isChecked: boolean;
  setWordDataParams: (arg1: string, agr2: any) => void;
};

function WordContainer(props: Props) {
  const location = useLocation();
  
  const usePar: { word: string } = useParams();

  useEffect(() => {
    if (!props.isChecked) {
      props.setWordDataParams(usePar.word, null);
    }
  }, [location.pathname]);

  return <Word wordData={props.wordData} />;
}
const mapStateToProps = (state: {
  wordData: any[];
  word: { word: string; isChecked: boolean };
}) => {
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
