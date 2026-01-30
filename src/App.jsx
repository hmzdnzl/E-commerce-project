import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./reducers/clientReducer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/HomePage";
import "./App.css";
import Header from "./layout/Header";
import AboutPage from "./pages/AboutPage";
import Footer from "./layout/Footer";
import PageContent from "./layout/PageContent";
import { setAuthToken } from "./api/axiosInstance";

import { fetchCategoriesThunk } from "../src/store/thunks/fetchCategoriesThunks";
import { fetchShopProductsThunk } from "../src/store/thunks/fetchProductsThunk";

setAuthToken(localStorage.getItem("token"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesThunk());
  }, [dispatch]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken("Bearer " + token);
    }
  }, []);

  return (
    <Router>
      <Header />
      <PageContent />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Router>
  );
}

export default App;
