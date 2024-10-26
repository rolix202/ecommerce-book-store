import React, { useState } from 'react';
import './ProductDetails.css'; 

const ProductDetails = () => {
  const [currentImage, setCurrentImage] = useState("./principalimage.png"); 
  const [quantity, setQuantity] = useState(1);

  const images = [
    "./image1.png", 
    "./image2.png",
    "./image3.png",
    "./image4.png"
  ];

  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

    const handleQuantityChange = (operation) => {
      setQuantity(prevQuantity =>
        operation === 'increase' ? prevQuantity + 1 : prevQuantity > 1 ? prevQuantity - 1 : 1
      );
    };

  return (
    <div className="product-details-container">
      <div className="image-gallery">
        <div className="sub-images">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product subimage ${index + 1}`}
              onClick={() => handleImageClick(image)}
              className={`thumbnail ${currentImage === image ? 'active' : ''}`}
            />
          ))}
        </div>
        <div>
        <img src={currentImage} alt="Main Product" className="main-image" />

        </div>

      </div>

      <div className="book-details">
      <h1 className="book-title">Chain of Gold: The Last Hours #1</h1>
      <p className="book-author">Cassandra Clare</p>
      <div className="rating">
        <span>
          <img src='./bi_star-fill.png' alt='star'/>
          <img src='./bi_star-fill.png' alt='star'/>
          <img src='./bi_star-fill.png' alt='star'/>
          <img src='./bi_star-fill.png' alt='star'/>
          <img src='./bi_star-half.png' alt='star'/>
        </span>
        <span className="rating-value">4.5</span>
      </div>

      <div className="price-section">
        <p className="price">$12.49</p>
        <p className="description">
          From #1 New York Times and USA TODAY bestselling author Cassandra Clare, this novel begins a new trilogy where evil hides in plain sight and love cuts deeper than any blade. Chain of Gold is a Shadowhunters novel.
        </p>
      </div>

      <div className="quantity-control">
        <button onClick={() => handleQuantityChange('decrease')}>-</button>
        <span className="quantity">{quantity}</span>
        <button onClick={() => handleQuantityChange('increase')}>+</button>
      </div>

      <div className="action-buttons">
        <button className="add-to-cart">Add to cart</button>
        <button className="favorite">Favorite</button>
      </div>

      <div className="specifications">
        <div className="spec">
          <span className='spec-title'>Publisher :</span> Margaret K. Books
          <span className='spec-title'>Publication Date :</span> March 3, 2020
        </div>
    
        <div className="spec">
          <span className='spec-title'>Language :</span> English
          <span className='spec-title'>Reading Age :</span> 14+
        </div>
       
        <div className="spec">
          <span className='spec-title'>Print Length :</span> 592 pages
          <span className='spec-title'>Dimensions :</span> 6 × 1.8 × 9 inches
        </div>
       
      </div>
    </div>

    </div>
  );
};

export default ProductDetails;
