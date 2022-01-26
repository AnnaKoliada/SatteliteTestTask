import { applyMiddleware, combineReducers, createStore } from 'redux';
import wordDataReducer from './wordDataReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
  wordData: wordDataReducer,
  form: formReducer,
});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));
  
export default store;