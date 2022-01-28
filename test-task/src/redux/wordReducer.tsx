
const SET_WORD = 'SET_WORD';
const SET_IS_WORD = 'SET_IS_WORD';
const SET_IS_CHECKED = 'SET_IS_CHECKED';

type State = {
  word: string,
  isWord: boolean,
  isChecked: boolean,
};
const initialState: State = {
  word: '',
  isWord: false,
  isChecked: false,
};

const wordReducer = (state = initialState, action: { type: any; word: any; isWord: boolean, isChecked: boolean }): State => {
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

export const setWordAC = (word: string) : { type: string, word: string } => {
  return { type: SET_WORD, word };
};
export const setIsWordAC = (isWord: boolean): { type: string, isWord: boolean } => {
  return { type: SET_IS_WORD, isWord };
};
export const setIsCheckedAC = (isChecked: boolean): { type: string, isChecked: boolean }=> {
  return { type: SET_IS_CHECKED, isChecked };
};


export default wordReducer;
