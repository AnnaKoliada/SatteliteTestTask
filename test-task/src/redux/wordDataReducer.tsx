import { wordDataAPI } from '../api/api';
import { updateIsFetching } from './CommonReducer';
import { setIsCheckedAC, setIsWordAC, setWordAC } from './wordReducer';

const SET_WORD_DATA = 'SET_WORD_DATA';

const initialState: any[] = [];

const wordDataReducer = (state = initialState, action: { type: any; data: any }): any[] => {
  switch (action?.type) {
    case SET_WORD_DATA:
      return [...action.data];
    default:
      return state;
  }
};

export const setWordDataAC = (data: string): { type: string, data: string } => {
  return { type: SET_WORD_DATA, data };
};

export const setWordDataParams = (word: string, history: any) => {
  return (dispatch: (arg0: { type: string; isFetching?: boolean; data?: string }) => void) => {
    dispatch(updateIsFetching(true));
    dispatch(setIsCheckedAC(true));
    wordDataAPI
      .getWordData(word)
      .then((response) => {
        if (history) history.push(word);
        dispatch(setWordAC(word));
        dispatch(setIsWordAC(true));
        dispatch(setWordDataAC(response.data));
        dispatch(updateIsFetching(false));
      })
      .catch(() => {
        if (history) history.push('not-found');
        dispatch(setIsWordAC(false));
        dispatch(updateIsFetching(false));
      });
  };
};

export default wordDataReducer;
