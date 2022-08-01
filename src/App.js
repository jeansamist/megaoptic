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
import BasketButton from "./components/uiElements/BasketButton";
import ServicesView from "./Views/ServicesView";
import ContactView from "./Views/ContactView";
import BasketView from "./Views/BasketView";
function App() {
  const [appLoading, setappLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setappLoading(false)
    }, 1000);
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
              <Route path='/home' element={<HomeView />} />
              <Route path='/store'>
                <Route index element={<StoreView />} />
                <Route path='category/:category/' element={<StoreCategoryView />} />
                <Route path='product/:id/' element={<ProductView />} />
              </Route>
              <Route path='/services'>
                <Route index element={<ServicesView />} />
                <Route path=':id/' element={<ServicesView />} />
              </Route>
              <Route path='/contact'>
                <Route index element={<ContactView />} />
                <Route path=':label/' element={<ContactView withLabel={true} />} />
              </Route>
              <Route path='/basket'>
                <Route index element={<BasketView />} />
                <Route path='chekout/' element={<BasketView />} />
              </Route>
            </Routes>
            <BasketButton />
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
