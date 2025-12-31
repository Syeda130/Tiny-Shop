import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Discover the <br /> 
            <span className="highlight">Future of Shopping</span>
          </h1>
          <p>
            Explore our exclusive collection of electronics, fashion, and jewelry. 
            High quality, affordable prices, and fast shipping right to your door.
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">Shop Now</Link>
          </div>
        </div>
        <div className="hero-image-container">
          <img 
            src="/hero.jpg" 
            alt="Hero Shopping" 
            className="hero-img"
          />
        </div>
      </section>

      {/* 2. FEATURES SECTION */}
      <section className="features-section">
        <div className="feature-card">
          <div className="icon">🚚</div>
          <h3>Fast Shipping</h3>
          <p>Get your products delivered within 24 hours.</p>
        </div>
        <div className="feature-card">
          <div className="icon">💎</div>
          <h3>Premium Quality</h3>
          <p>We source only the best products.</p>
        </div>
        <div className="feature-card">
          <div className="icon">🛡️</div>
          <h3>24/7 Support</h3>
          <p>Our team is here to help you anytime, anywhere.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;