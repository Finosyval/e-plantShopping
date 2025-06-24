import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AboutUs from './AboutUs';

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="app-container">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      {!showProducts ? (
        <div className="welcome-screen">
          <div className="welcome-background"></div>
          <div className="welcome-content-wrapper">
            <div className="welcome-content">
              <h1>Welcome To Paradise Nursery</h1>
              <div className="divider"></div>
              <p>Where Green Meets Serenity</p>
              <button 
                className="get-started-button" 
                onClick={() => setShowProducts(true)}
              >
                Get Started
              </button>
            </div>
            <div className="about-section">
              <AboutUs />
            </div>
          </div>
        </div>
      ) : (
        <ProductList onBack={() => setShowProducts(false)} />
      )}
    </div>
  );
}

export default App;



