import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import clientReducer from '../reducers/clientReducer';
import productReducer from '../reducers/productReducer';
import shoppingCartReducer from '../reducers/shoppingCartReducer';
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
import bestSellerReducer from '../reducers/bestSellerReducer';
import aboutReducer from '../reducers/aboutReducer';
import MeetOurTeamReducer from '../reducers/meetOurTeamReducer';
import teamPageReducer from '../reducers/teamPageReducer';
import PricingReducer from '../reducers/pricingReducer';
import blogReducer from '../reducers/blogReducer';
import addressReducer from './thunks/addressThunk';

const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
  menu: menuReducer,
  slider: sliderReducer,
  category: categoryReducer,
  shopCategories: shopCategoriesReducer,
  advicedProduct: advicedProductReducer,
  products: productCardsReducer,
  productSlider: productSliderReducer,
  featured: featuredReducer,
  shopProducts: shopProductsReducer,
  brands: brandsReducer,
  contact: contactReducer,
  productDetail: ProductDetailReducer,
  bestSellers: bestSellerReducer,
  about: aboutReducer,
  meetOurTeam: MeetOurTeamReducer,
  teamPage: teamPageReducer,
  pricing: PricingReducer,
  blog: blogReducer,
  address:addressReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;