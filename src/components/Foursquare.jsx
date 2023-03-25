import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Foursquare = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.foursquare.com/v3/places/search",
      headers: {
        accept: "application/json",
        Authorization: "fsq3l6VqyI0bugQXMJrA8VRhEi2S/b9k2wSqR1xtP05sWjU=",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setPlaces(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {places.map((place, id) => (
        <div key={id}>
          <li>{place.name}</li>
        </div>
      ))}
    </div>
  );
};

export default Foursquare;
