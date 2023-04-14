import cardDetails from "./cardDetails";
import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";
import { Link, useLocation } from "react-router-dom";
import Modal from "../../components/RestaurantCard/Modal";
import { useState } from "react";

const RestaurantList = () => {
  const [show, setShow] = useState(false);
  const { state } = useLocation([]);

  const restaurantDetails = cardDetails.map((data) => (
    <div className="restaurantlist__optionCard" key={data.id}>
      <img src={data.image} alt="" onClick={() => setShow(true)} />
      <div className="restaurantlist__optionContent">
        <h3 onClick={() => setShow(true)}>{data.name}</h3>
        <p>{data.rating}</p>
        <p>{data.location}</p>
        <p>{data.closes}</p>
      </div>
    </div>
  ));

  return (
    <div className="restaurantlist">
      <Navigation />
      <div className="restaurantlist__wrapper">
        <Link to="/" className="restaurantlist__navBack">
          &larr;
        </Link>
        <h2>Nearby Restaurants</h2>
        <div className="restaurantlist__dataCard">{restaurantDetails}</div>
      </div>
      <Modal show={show} setShow={setShow} />

      <div className="restaurantlist__footer">
        <Footer />
      </div>
    </div>
  );
};

export default RestaurantList;
