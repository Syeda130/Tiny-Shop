import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <h3>TinyShop</h3>
        <p className="thank-you">Thank you for shopping with us! ❤️</p>
        
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
         
        </div>

        <p className="copyright">
          &copy;  TinyShop Project. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;