import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";
import { Link, useLocation } from "react-router-dom";
import Modal from "../../components/RestaurantCard/Modal";
import { useState } from "react";

const RestaurantList = (props) => {
  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState(null)
  const location = useLocation()
  const propsData = location.state
  // console.log(propsData.mapData)

  const dataP = propsData.mapData.map(info => (
    <div className="restaurantlist__optionCard" key={info.shopId} onClick={() => {
      setSelectedData(info)
      setShow(true)}}>
      <img src={info.imagesUrl} alt="" />
      <div className="restaurantlist__optionContent">
        <h3>{info.name}</h3>
        <p>⭐⭐⭐⭐⭐</p>
        <p>{info.location.address}</p>
      </div>
    </div>
  ))

  return (
    <div className="restaurantlist">
      <Navigation />
      <div className="restaurantlist__wrapper">
        <Link to="/map" className="restaurantlist__navBack">
          &larr;
        </Link>
        <h2>Nearby Restaurants</h2>
        <div className="restaurantlist__dataCard">
        {dataP}
      </div>
      </div>
      
      <Modal show={show} setShow={setShow} data={selectedData}/>

      <div className="restaurantlist__footer">
        <Footer />
      </div>
    </div>
  );
};

export default RestaurantList;
