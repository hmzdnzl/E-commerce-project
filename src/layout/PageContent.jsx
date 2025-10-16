import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ShopPage from '../pages/ShopPage';
import ContactPage from '../pages/ContactPage';
import ProductDetails from '../pages/ProductDetailsPage';
import TeamPage from '../pages/TeamPage';


export default function PageContent() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />  
        <Route path="/shop/detail" component={ProductDetails} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/contact" component={ContactPage} />  
        <Route path="/team" component={TeamPage} />  
      </Switch>
    </main>
  );
}