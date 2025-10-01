import { combineReducers, createStore } from 'redux';
import menuReducer from '../reducers/menuReducer';
import sliderReducer from '../reducers/sliderReducer';
import categoryReducer from '../reducers/categoryReducer';
import productCardsReducer from '../reducers/productCardsReducer';

const rootReducer = combineReducers({
  menu: menuReducer,
  slider:sliderReducer,
  category: categoryReducer,
  products: productCardsReducer,
});

const store = createStore(rootReducer);
export default store;