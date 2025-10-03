import { combineReducers, createStore } from 'redux';
import menuReducer from '../reducers/menuReducer';
import sliderReducer from '../reducers/sliderReducer';
import categoryReducer from '../reducers/categoryReducer';
import productCardsReducer from '../reducers/productCardsReducer';
import productSliderReducer from '../reducers/productSliderReducer';
import advicedProductReducer from '../reducers/advicedProductReducer';
import featuredReducer from '../reducers/featuredReducer';
import { shopCategoriesReducer } from '../reducers/shopCategoriesReducer';

const rootReducer = combineReducers({
  menu: menuReducer,
  slider:sliderReducer,
  category: categoryReducer,
  shopCategories: shopCategoriesReducer,
  advicedProduct: advicedProductReducer,
  products: productCardsReducer,
  productSlider: productSliderReducer,
  featured:featuredReducer,
});

const store = createStore(rootReducer);
export default store;