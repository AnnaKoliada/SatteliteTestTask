import { applyMiddleware, combineReducers, createStore } from 'redux';
import wordDataReducer from './wordDataReducer';
import thunkMiddleware from 'redux-thunk';
import commonReducer from './CommonReducer';
import wordReducer from './wordReducer';

const reducers = combineReducers({
  wordData: wordDataReducer,
  fetching: commonReducer,
  word: wordReducer,
});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));
  
export default store;