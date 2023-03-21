import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
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

const Map = () => {
  const { lat, long } = DUMMY_LOCATION;
  const coords = [lat, long];
  const mapZoomLevel = 15;

  const markers = DUMMY_COORDINATES.map((el) => {
    const { lat, long } = el.coords;
    const coords = [lat, long];

    return (
      <Marker position={coords} key={el.id}>
        <Popup>{el.name}</Popup>
      </Marker>
    );
  });

  return (
    <MapContainer
      center={coords}
      zoom={mapZoomLevel}
      scrollWheelZoom={false}
      className={classes.map}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers}
    </MapContainer>
  );
};

export default Map;
