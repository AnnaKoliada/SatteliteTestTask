import { wordDataAPI } from '../api/api';
import { updateIsFetching } from './CommonReducer';

const SET_WORD_DATA = 'SET_WORD_DATA';

const initialState = {};

const wordDataReducer = (state = initialState, action: { type: any; data: any }) => {
  switch (action?.type) {
    case SET_WORD_DATA:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export const setWordDataAC = (data: string) => ({ type: SET_WORD_DATA, data });

export const setWordData = (word: string) => {
  return (dispatch: (arg0: { type: string; isFetching?: boolean; data?: string; }) => void) => {
    dispatch(updateIsFetching(true));
    wordDataAPI.getWordData(word).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setWordDataAC(data));
        dispatch(updateIsFetching(false));
      }
    });
  };
};

export default wordDataReducer;