// Here is to call Yelp Fusion API.
// It temporarily shows a small list of restaurants just to see if the code here calls the API correctly.

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./RestaurantList.scss";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const corsApiUrl = "https://cors-anywhere.herokuapp.com/";

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${corsApiUrl}https://api.yelp.com/v3/businesses/search?location=kyoto`,
        {
          mode: "cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${import.meta.env.VITE_YELP_API_KEY}`,
          },
        }
      );
      setRestaurants(response.data.businesses);
      console.log(response.data.businesses);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Restaurants in Kyoto(for now)</h2>
      <a href="https://cors-anywhere.herokuapp.com/corsdemo" target="_blank">
        *You might need to get here and click the button due to CORS issue with
        Yelp API to display the result.
      </a>

      <ul>
        {restaurants.map((restaurant) => (
          <>
            <li key={restaurant.id}>{restaurant.name}</li>
            <img src={restaurant.image_url} alt=""></img>
          </>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
