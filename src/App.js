import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeView from "./Views/HomeView";
import AppLoader from "./components/AppLoader";
import Navbar from "./components/navbar/Navbar";
import './assets/styles/css/master.css';
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
                <Route index element={'project overview'} />
                <Route path=':id' element={'project view'} />
              </Route>
              <Route path='/services'>
                <Route index element={'my account'} />
              </Route>
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
