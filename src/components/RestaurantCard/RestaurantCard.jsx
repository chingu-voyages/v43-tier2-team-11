import cardDetails from "./cardDetails";
import classes from "./RestaurantCard.module.scss";
import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";
import Modal from "./Modal";
import { useState } from "react";

const RestaurantCard = () => {
  const [show, setShow] = useState(false);

  const restaurantDetails = cardDetails.map((data) => (
    <div className={classes["restaurant-card"]} key={data.id}>
      <img
        className={classes["restaurant-image"]}
        src={data.image}
        alt=""
        onClick={() => setShow(true)}
      />
      <div className={classes["cardContent"]}>
        <h3 onClick={() => setShow(true)}>{data.name}</h3>
        <p>{data.rating}</p>
        <p>{data.location}</p>
        <p>{data.closes}</p>
      </div>
    </div>
  ));

  return (
    <div className={classes["main-container"]}>
      <Navigation />
      <div className={classes["card-container"]}>
        <button className={classes.navBack}>&larr;</button>
        <h2 className={classes.cardHeading}>Nearby Restaurants</h2>
        <div className={classes["dataCard"]}>{restaurantDetails}</div>
      </div>
      <Modal show={show} setShow={setShow} />
      <Footer />
    </div>
  );
};

export default RestaurantCard;
