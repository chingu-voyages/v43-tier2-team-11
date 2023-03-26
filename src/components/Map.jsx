import { useEffect, useState } from 'react'
import axios from 'axios'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import classes from "./Map.module.scss";
import Loading from "./Loading";

const Map = () => {
  const [data, setData] = useState([])
  const [currentLocation, setCurrentLocation] = useState('')
  const [loading, setLodaing] = useState(true)
  const [coords, setCoords] = useState([])
  const mapZoomLevel = 15;

  useEffect(() => {
    if (!loading) {
      const BASEURL = 'https://api.foursquare.com/v3/places/search?'
      const parameters = {
        client_id: import.meta.env.VITE_FORESQUARE_CLIENT_ID,
        client_secret: import.meta.env.VITE_FORESQUARE_CLIENT_SECRET,
        query: "food",
        ll: coords,
        open_now: 'true',
        sort: 'DISTANCE'
      }
      axios
        .get(BASEURL + new URLSearchParams(parameters), {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
            "Authorization": import.meta.env.VITE_FORESQUARE_API_KEY
          },
        })
        .then(({ data }) => {
          setData(data['results']);
        });
    } else {
      return
    }
  }, [loading, coords])

  useEffect(() => {
    return navigator.geolocation.getCurrentPosition(location)
  }, [])

  useEffect(() => {
    if (!currentLocation) {
      setLodaing(true)
    } else {
      const { lat, long } = currentLocation;
      setCoords([lat, long])
      setLodaing(false)
    }
  }, [currentLocation])

  const location = (position) => {
    let location = { 'lat': position.coords.latitude, 'long': position.coords.longitude }
    setCurrentLocation(location);
  }

  const markers = data.map((el) => {
    const { latitude, longitude } = el['geocodes']['main']
    const coords = [latitude, longitude];
    return (
      <Marker position={coords} key={el['fsq_id']}>
        <Popup>{el['name']}</Popup>
      </Marker>
    );
  });

  //style for Map (to be implemented later)
  // const Stadia_AlidadeSmooth = L.tileLayer(
  //   "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
  //   {
  //     maxZoom: 20,
  //     attribution:
  //       '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
  //   }
  // );

  return (
    <>
      {loading ? <Loading /> : <MapContainer
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
      </MapContainer>}
    </>
  );
};

export default Map;
