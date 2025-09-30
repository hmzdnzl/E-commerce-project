import { combineReducers, createStore } from 'redux';
import menuReducer from '../reducers/menuReducer';
import sliderReducer from '../reducers/sliderReducer';

const rootReducer = combineReducers({
  menu: menuReducer,
  slider:sliderReducer
  
});

const store = createStore(rootReducer);
export default store;