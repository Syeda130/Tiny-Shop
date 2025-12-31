import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Footer from './components/Footer';
import './App.css';

function App() {
  // 1. Initialize State (check localStorage so user preference is remembered)
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  // 2. Toggle Function
  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  // 3. Update CSS class on Body & Save to LocalStorage
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="App">
        {/* Pass state and function to Navbar */}
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        

         <Footer />
      </div>
    </Router>
  );
}

export default App;