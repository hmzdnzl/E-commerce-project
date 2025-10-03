import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ShopPage from '../pages/ShopPage';


export default function PageContent() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />  
        <Route path="/shop" component={ShopPage} />  
      </Switch>
    </main>
  );
}