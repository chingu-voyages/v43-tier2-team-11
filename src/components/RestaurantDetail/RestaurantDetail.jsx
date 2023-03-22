import React from 'react';
import './RestaurantDetail.css';

// Font awesome imports for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
// import { faPlateUtensils } from '@fortawesome/free-solid-svg-icons';


const RestaurantDetail = ({ restaurant }) => {
  const mockData = {
    title: "The Spicy Spoon",
    image: "https://example.com/spicy-spoon.jpg",
    type: "Fast Food",
    address: "123 Main Street, Anytown USA",
    phoneNumber: "555-123-4567",
    reviewStar: 4.5,
    price: "$$"
  };

  const { title, type, address, phoneNumber, reviewStar, price } = mockData;

  return (
    <div className="restaurant-detail">
      <h1>{title}</h1>
      <p>{reviewStar} stars</p>
      <p>{price}</p>
      <p><FontAwesomeIcon icon={faLocationDot} /> {address}</p>
      <p><FontAwesomeIcon icon={faPhone} /> {phoneNumber}</p>
      {/* <p><FontAwesomeIcon icon={faPlateUtensils} /> {type}</p> */}
      <button>SAVE TO MY LIST</button>
    </div>
  );
};

export default RestaurantDetail;
