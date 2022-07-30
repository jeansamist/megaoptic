import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeView from "./Views/HomeView";
import AppLoader from "./components/AppLoader";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import './assets/styles/css/master.css';
import StoreView from "./Views/StoreView";
import StoreCategoryView from "./Views/StoreCategoryView";
import ProductView from "./Views/ProductView";
import ContactView from "./Views/ContactView";
function App() {
  const [appLoading, setappLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setappLoading(false)
    }, 3000);
  }, [])
  if (appLoading) {
    return (
      <Router>
        <div className="App">
          <AppLoader />
        </div>
      </Router>
    )
  }else {
    return (
      <Router>
        <div className="App">
          <div className="view app-view">
            <Navbar />
            <Routes>
              <Route path='/' element={<HomeView />} />
              <Route path='/home' eelement={<HomeView />} />
              <Route path='/store'>
                <Route index element={<StoreView />} />
                <Route path='category/:category/' element={<StoreCategoryView />} />
                <Route path='product/:id/' element={<ProductView />} />
              </Route>
              <Route path='/services'>
                <Route index element={'my account'} />
              </Route>
              <Route path='/contact'>
                <Route index element={<ContactView />} />
                <Route path=':label/' element={<ContactView />} />
              </Route>
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
