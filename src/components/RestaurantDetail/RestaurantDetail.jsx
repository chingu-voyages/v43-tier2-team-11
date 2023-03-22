import React from 'react';
import './RestaurantDetail.css';

const RestaurantDetail = ({ restaurant }) => {
  const mockData = {
    name: "The Spicy Spoon",
    image: "https://example.com/spicy-spoon.jpg",
    options: ["Dine-in", "Take-out", "Delivery"],
    address: "123 Main Street, Anytown USA",
    openingTime: "10:00",
    closingTime: "21:00",
    menuLink: "https://example.com/menu.pdf",
    phoneNumber: "555-123-4567"
  };

  const { name, options, address, openingTime, closingTime, menuLink, phoneNumber } = mockData;
  const currentTime = new Date();
  const openingHour = new Date(currentTime);
  openingHour.setHours(openingTime.slice(0, 2), openingTime.slice(3), 0); // set opening time
  const closingHour = new Date(currentTime);
  closingHour.setHours(closingTime.slice(0, 2), closingTime.slice(3), 0); // set closing time

  let isOpen = false;
  let openOrClosed = '';
  let nextOpenTime = '';

  if (currentTime >= openingHour && currentTime <= closingHour) {
    isOpen = true;
    openOrClosed = 'Open';
  } else {
    const nextOpeningDay = currentTime.getDay() === 6 ? 0 : currentTime.getDay() + 1; // set next opening day (Mon-Sun)
    const nextOpeningDate = new Date(currentTime);
    nextOpeningDate.setDate(currentTime.getDate() + (nextOpeningDay - currentTime.getDay()));
    nextOpeningDate.setHours(openingTime.slice(0, 2), openingTime.slice(3), 0); // set next opening time
    const timeDiff = nextOpeningDate.getTime() - currentTime.getTime();
    const hours = Math.floor(timeDiff / 3600000);
    const minutes = Math.floor((timeDiff - hours * 3600000) / 60000);
    const nextOpeningDayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][nextOpeningDay];
    nextOpenTime = `at ${openingTime} AM ${nextOpeningDayName}`;
    openOrClosed = 'Closed';
  }

  return (
    <div className="restaurant-detail">
      <h1>{name}</h1>
      <p>Service options: {options.join(', ')}</p>
      <p>Address: {address}</p>
      <p>Hours: {openOrClosed} - {isOpen ? `Closes at ${closingTime}` : `Opens ${nextOpenTime}`}</p>
      <p>Menu: <a href={menuLink}>{menuLink}</a></p>
      <p>Phone: {phoneNumber}</p>
      <h3>Review Summary</h3>
    </div>
  );
};


export default RestaurantDetail;

