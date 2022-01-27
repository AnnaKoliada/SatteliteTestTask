import { wordDataAPI } from '../api/api';
import { updateIsFetching } from './CommonReducer';
import { setIsCheckedAC, setIsWordAC, setWordAC } from './wordReducer';

const SET_WORD_DATA = 'SET_WORD_DATA';

const initialState: any = [];

const wordDataReducer = (state = initialState, action: { type: any; data: any }) => {
  console.log(state);
  switch (action?.type) {
    case SET_WORD_DATA:
      return [...action.data];
    default:
      return state;
  }
};

export const setWordDataAC = (data: string) => {
  console.log(data);
  return { type: SET_WORD_DATA, data };
};

// export const setWordData = (word: string, history: any, stateWord: string) => {
//   console.log('setWordData', word);
//   return (dispatch: (arg0: { type: string; isFetching?: boolean; data?: string }) => void) => {
//     if (stateWord.length !== 0){
//       dispatch(updateIsFetching(true));
//       wordDataAPI
//         .getWordData(word)
//         .then((response) => {
//           history.push(word);
//           dispatch(setIsWordAC(true));
//           dispatch(setWordDataAC(response.data));
//           dispatch(updateIsFetching(false));
        
//         })
//         .catch(() => {
//           history.push('not-found');
//           dispatch(setIsWordAC(false));
//           dispatch(updateIsFetching(false));
//         });
//     }
//   };
// };
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
      
    // }
   
  };
};

export default wordDataReducer;
