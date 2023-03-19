import { useEffect } from "react";
import classes from "./Map.module.scss";

const DUMMY_COORDINATES = [
  {
    id: "i1",
    name: "bills",
    coords: {
      lat: 35.668884986902434,
      long: 139.70603408498235,
    },
  },
  {
    id: "i2",
    name: "Harry's Sandwich Company",
    coords: {
      lat: 35.66702189118264,
      long: 139.70644521236878,
    },
  },
  {
    id: "i3",
    name: "SOUP STOCK TOKYO CAFE",
    coords: {
      lat: 35.66597014771571,
      long: 139.711036633326,
    },
  },
  {
    id: "i4",
    name: "Fratelli Paradiso",
    coords: {
      lat: 35.6674098641632,
      long: 139.70841296420758,
    },
  },
];

const DUMMY_LOCATION = { lat: 35.66756203584793, long: 139.7077023534186 };

let isInitial = true;

const Map = () => {
  const { lat, long } = DUMMY_LOCATION;
  const coords = [lat, long];
  const mapZoomLevel = 15;

  //somehow this useEffect is executed twice...
  //added "isInitial" to avoid error but this has to be fixed
  useEffect(() => {
    if (isInitial) {
      const map = L.map("map").setView(coords, mapZoomLevel);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      DUMMY_COORDINATES.map((el) => {
        const { lat, long } = el.coords;
        const coords = [lat, long];
        const name = el.name;

        L.marker(coords)
          .addTo(map)
          .bindPopup(
            L.popup({
              maxWidth: 250,
              minWidth: 100,
              autoClose: false,
              closeOnClick: false,
            })
          )
          .setPopupContent(name)
          .openPopup();
      });
    }

    isInitial = false;

    console.log("Page Loaded");
  }, []);

  return (
    <>
      <div id="map" className={classes.map}></div>
    </>
  );
};

export default Map;
