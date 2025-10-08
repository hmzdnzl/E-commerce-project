import { combineReducers, createStore } from 'redux';
import menuReducer from '../reducers/menuReducer';
import sliderReducer from '../reducers/sliderReducer';
import categoryReducer from '../reducers/categoryReducer';
import productCardsReducer from '../reducers/productCardsReducer';
import productSliderReducer from '../reducers/productSliderReducer';
import advicedProductReducer from '../reducers/advicedProductReducer';
import featuredReducer from '../reducers/featuredReducer';
import { shopCategoriesReducer } from '../reducers/shopCategoriesReducer';
import { shopProductsReducer } from '../reducers/shopProductsReducer';
import brandsReducer  from '../reducers/brandsReducer';
import { contactReducer } from '../reducers/contactReducer';
import ProductDetailReducer from '../reducers/productDetailReducer';

const rootReducer = combineReducers({
  menu: menuReducer,
  slider:sliderReducer,
  category: categoryReducer,
  shopCategories: shopCategoriesReducer,
  advicedProduct: advicedProductReducer,
  products: productCardsReducer,
  productSlider: productSliderReducer,
  featured:featuredReducer,
  shopProducts: shopProductsReducer,
  brands: brandsReducer,
  contact: contactReducer,
  productDetail: ProductDetailReducer
});

const store = createStore(rootReducer);
export default store;