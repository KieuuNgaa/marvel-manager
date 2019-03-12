import { combineReducers } from 'redux';
import charactersReducer from '../../screens/Home/reducer';
import detailCharacterReducer from '../../screens/Detail/reducer';

const rootReducer = combineReducers({
  charactersReducer: charactersReducer,
  detailCharacterReducer: detailCharacterReducer
});

export default rootReducer;
