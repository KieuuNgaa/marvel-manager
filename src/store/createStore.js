import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from "redux-thunk";
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

export default function configureStore() {

  const store = createStore(rootReducer, applyMiddleware(reduxThunk));
  return store;

}
