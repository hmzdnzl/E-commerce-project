import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ShopPage from '../pages/ShopPage';
import ContactPage from '../pages/ContactPage';


export default function PageContent() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />  
        <Route path="/shop" component={ShopPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </main>
  );
}