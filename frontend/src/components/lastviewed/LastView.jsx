import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

const LastView = ({ items }) => {
  const [isFilled, setIsfilled] = useState(false);

  const itemsPerPage = 4;
  const totalItems = items.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filledItems, setFilledItems] = useState({});

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getCurrentItems = () => {
    const start = currentIndex * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  };

  const handleHeartClick = (index) => {
    setFilledItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the current index
    }));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="collection-container">
      <div className="collection-grid">
        <h2 className="collection-grid-title">Last viewed</h2>
        <div className="items">
          <span onClick={handlePrev}>
            <MdOutlineKeyboardArrowLeft
              size={24}
              className="MdOutlineKeyboardArrow"
            />
          </span>
          {getCurrentItems().map((item, index) => (
            <div key={index} className="item">
              <img src={item.image} alt={item.title} style={{cursor : "pointer"}} />
              <h3 className="items__item-title">{item.title}</h3>
              <p className="items__item-author">{item.author}</p>
              <div className="item-priceFahaertContainer">
                <span className="items__item-price">₦{item.price}</span>
                <span
                  className="items__item-FaHeart"
                  onClick={() => handleHeartClick(index)}
                >
                   {filledItems[index] ? (
                    <IoIosHeart color="purple" size={20} />
                  ) : (
                    <FaRegHeart color="purple" size={20} />
                  )}
                </span>
              </div>
              <button className="items__item-button">
                <span className="items__item-button-info">
                  <span className="IoCartOutline">
                    <IoCartOutline />
                  </span>
                  <span>Add to cart</span>
                </span>
              </button>
            </div>
          ))}
          <span onClick={handleNext}>
            <MdOutlineKeyboardArrowRight
              size={24}
              className="MdOutlineKeyboardArrow"
            />
          </span>
        </div>
      </div>

      <div className="navigation-dots">
        {Array.from({ length: totalPages }).map((_, i) => (
          <input
            type="radio"
            key={i}
            checked={currentIndex === i}
            onChange={() => setCurrentIndex(i)}
            className="custom-radio"
          />
        ))}
      </div>
    </div>
  );
};

export default LastView;
