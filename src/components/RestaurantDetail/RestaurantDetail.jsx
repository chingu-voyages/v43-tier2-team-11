import React from 'react';
import './RestaurantDetail.css';

// Font awesome imports for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfAlt as halfStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { faUtensils as faUtensils } from '@fortawesome/free-solid-svg-icons';

const RestaurantDetail = ({ restaurant }) => {
  const mockData = {
    title: "The Spicy Spoon",
    image: "https://thumbs.dreamstime.com/b/udon-stir-fry-noodles-chicken-vegetables-black-background-hot-wok-chicken-steaming-over-plate-udon-stir-fry-204240213.jpg",
    type: "Fast Food",
    address: "123 Main Street, Anytown USA",
    phoneNumber: "555-123-4567",
    reviewScore: 3.5,
    reviewTotal: 35,
    price: "$$"
  };

  const { title, image, type, address, phoneNumber, reviewScore, reviewTotal, price } = mockData;

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= reviewScore) {
      stars.push(<FontAwesomeIcon key={i} icon={solidStar} style={{ color: "yellow" }}/>);
    } else if (i === Math.ceil(reviewScore) && reviewScore % 1 !== 0) {
      stars.push(<FontAwesomeIcon key={i} icon={halfStar} style={{ color: "yellow" }}/>);
    } else {
      stars.push(<FontAwesomeIcon key={i} icon={regularStar} style={{ color: "yellow" }}/>);
    }
  }

  return (
<div className="container">
    <img src={image} />
    <div className="restaurant-detail">
      <h1>{title}</h1>
      <p>
        {reviewScore} {stars} {reviewTotal}
      </p>
      <p>{price}</p>
      <hr/>
      <p><FontAwesomeIcon icon={faLocationDot} /> {address}</p>
      <p><FontAwesomeIcon icon={faPhone} /> {phoneNumber}</p>
      <p><FontAwesomeIcon icon={faUtensils} /> {type}</p>
      <button>SAVE TO MY LIST</button>
    </div>
</div>
  );
};

export default RestaurantDetail;
