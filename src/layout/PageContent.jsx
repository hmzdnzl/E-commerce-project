import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ShopPage from "../pages/ShopPage";
import ContactPage from "../pages/ContactPage";
import ProductDetails from "../pages/ProductDetailsPage";
import TeamPage from "../pages/TeamPage";
import PricingPage from "../pages/PricingPage";
import BlogPage from "../pages/BlogPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import PrivateRoute from "./PrivateRoute";

export default function PageContent() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId" component={ProductDetails} />
        <Route path="/shop/:gender/:categoryName/:categoryId" component={ShopPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/team" component={TeamPage} />
        <Route path="/prices" component={PricingPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/signup" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
       <Route
  path="/profile"
  render={() => (
    <PrivateRoute>
      <ProfilePage />
    </PrivateRoute>
  )}
/>
      </Switch>
    </main>
  );
}
