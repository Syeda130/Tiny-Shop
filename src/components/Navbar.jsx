import { Link, NavLink } from 'react-router-dom';


const Navbar = ({ darkMode, toggleTheme }) => {
  return (
    <nav>
      
<h1>TinyShop </h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
         <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/products" className="nav-link">Products</NavLink>
        
        {/* Toggle Button */}
        <button className="toggle-btn" onClick={toggleTheme}>
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;