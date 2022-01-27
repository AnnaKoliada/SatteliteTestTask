import { wordDataAPI } from '../api/api';
import { updateIsFetching } from './CommonReducer';
import { setWordDataAC } from './wordDataReducer';

const SET_WORD = 'SET_WORD';
const SET_IS_WORD = 'SET_IS_WORD';
const SET_IS_CHECKED = 'SET_IS_CHECKED';

const initialState: any = {
  word: '',
  isWord: false,
  isChecked: false,
};

const wordReducer = (state = initialState, action: { type: any; word: any; isWord: boolean, isChecked: boolean }) => {
  switch (action?.type) {
    case SET_WORD:
      return {
        ...state,
        word: action.word,
      };
    case SET_IS_WORD:
      return {
        ...state,
        isWord: action.isWord,
      };
    case SET_IS_CHECKED:
      return {
        ...state,
        isChecked: action.isChecked,
      };
    default:
      return state;
  }
};

export const setWordAC = (word: string) => {
  return { type: SET_WORD, word };
};
export const setIsWordAC = (isWord: boolean) => {
  return { type: SET_IS_WORD, isWord };
};
export const setIsCheckedAC = (isChecked: boolean) => {
  return { type: SET_IS_CHECKED, isChecked };
};


export default wordReducer;
