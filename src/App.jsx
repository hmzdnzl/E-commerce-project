import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react'
import HomePage from './pages/HomePage';
import './App.css'
import Header from './layout/Header';
import AboutPage from './pages/AboutPage';
import Footer from './layout/Footer';
import PageContent from './layout/PageContent';


function App() {
  return (
    <Router>
      <Header />
      <PageContent />
      <Footer />
    </Router>
  );
}

export default App;
