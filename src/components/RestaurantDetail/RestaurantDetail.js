import React, { useState } from 'react';
import './RestaurantDetail.css';

const RestaurantDetail = ({ restaurant }) => {
  const openingTime = new Date().setHours(restaurant.openingTime.slice(0,2), restaurant.openingTime.slice(3,5));
  const closingTime = new Date().setHours(restaurant.closingTime.slice(0,2), restaurant.closingTime.slice(3,5));
  const currentTime = new Date().getTime();
  const isOpen = (currentTime >= openingTime && currentTime <= closingTime);
  const ifOpen = isOpen ? 'Closes at' : 'Opens at';
  const openOrClosed = isOpen ? 'Open' : 'Closed';

  const restaurant = {
    name: "The Spicy Spoon",
    image: "https://example.com/spicy-spoon.jpg",
    options: ["Dine-in", "Take-out", "Delivery"],
    address: "123 Main Street, Anytown USA",
    openingTime: "10:00",
    closingTime: "21:00",
    menuLink: "https://example.com/menu.pdf",
    phoneNumber: "555-123-4567"
  };


  return (
    <div className="restaurant-detail">

      <h1>{restaurant.name}</h1>
      <p>Service options: {restaurant.options}</p>
      <p>Address: {restaurant.address}</p>
      <p>Hours: {openOrClosed} - {ifOpen} {isOpen ? restaurant.closingTime : restaurant.openingTime}</p>
      <p>Menu: {restaurant.menuLink}</p>
      <p>Phone: {restaurant.phoneNumber}</p>
      <h3>Review Summary</h3>

    </div>
  );
};

export default RestaurantDetail;