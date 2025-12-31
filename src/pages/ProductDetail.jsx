import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loader from '../components/Loader';

const ProductDetail = () => {
  const { id } = useParams(); // Get ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader />;
  if (!product) return <div className="error">Product not found</div>;

  return (
    <div className="container">
      <Link to="/products" className="btn btn-back">← Back to List</Link>
      <div className="detail-container">
        <img src={product.image} alt={product.title} className="detail-img" />
        <div className="detail-info">
          <h2>{product.title}</h2>
          <span className="price" style={{ fontSize: '2rem', display: 'block', margin: '15px 0' }}>
            ${product.price}
          </span>
          <p style={{ lineHeight: '1.6' }}>{product.description}</p>
          <p style={{ marginTop: '20px', fontWeight: 'bold' }}>Category: {product.category}</p>
          <button className="btn" style={{ marginTop: '20px' }}>Add to Cart (Demo)</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;