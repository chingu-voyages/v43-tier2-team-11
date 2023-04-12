import axios from "axios";
import { useEffect, useState } from "react";

const TravelAdvisor = () => {
  const [list, setList] = useState([]);

  const fetchData = async () => {
    const options = {
      method: "POST",
      url: "https://travel-advisor.p.rapidapi.com/restaurants/v2/list",
      params: { currency: "USD", units: "km", lang: "en_US" },
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "-",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
      data: '{"geoId":293928,"partySize":2,"reservationTime":"2022-03-07T20:00","sort":"RELEVANCE","sortOrder":"desc","filters":[{"id":"establishment","value":["10591"]}],"boundingBox":{"northEastCorner":{"latitude":12.248278039408776,"longitude":109.1981618106365},"southWestCorner":{"latitude":12.243407232845051,"longitude":109.1921640560031}},"updateToken":""}',
    };

    axios
      .request(options)
      .then(function (response) {
       
  
      })
      .catch(function (error) {
    
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  //   const restaurantList = list.map((el) => (
  //     <li key={el.location_id}>{el.name ? el.name : "Not Registered"}</li>
  //   ));

  return (
    <>
      <h1>Hello, world</h1>

      {/* <ul>{restaurantList}</ul> */}
    </>
  );
};

export default TravelAdvisor;
