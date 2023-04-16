import React,{ useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import FormInput from "./FormInput";
import Navigation from "./layout/Navigation";
import Footer from "./layout/Footer";
import fullStar from "../assets/rating_icons/full-star.svg";
import halfStar from "../assets/rating_icons/half-star.svg";
import { getMapData } from "./services/api";
import classes from "./Map.module.scss";
import locationSvg from "../assets/iconly_2/Light/Location.svg";
import CategorySvg from "../assets/iconly_2/Light/Category.svg";

const Map = () => {
  const LENGTHSIZE = 35;
  const { state } = useLocation([]);
  const [mapData, setMapData] = useState([]);
  const [currentLocation, setCurrentLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [coords, setCoords] = useState([]);
  const [changedCoords, setChangedCoords] = useState([]);
  const mapZoomLevel = 15;

  // - current -
  useEffect(() => {
    if (!loading && state === null) {
      getMapData(coords).then((res) => {
        setMapData(res)
      });
    } else {
      return
    };
  }, [loading, coords, state]);

  useEffect(() => {
    if (state === null) {
      return navigator.geolocation.getCurrentPosition(location);
    };
  }, [state]);

  useEffect(() => {
    if (!currentLocation && state === null) {
      setLoading(true);
    } else {
      const { lat, long } = currentLocation;
      setCoords([lat, long]);
      setChangedCoords([lat, long]);
      setLoading(false);
      setInitialLoading(false);
    };
  }, [currentLocation, state]);

  const location = (position) => {
    let location = { 'lat': position.coords.latitude, 'long': position.coords.longitude };
    setCurrentLocation(location);
  };
  // - current end -

  // - search data -
  useEffect(() => {
    if (state !== null) {
      const { latitude, longitude } = state['suggestedLocations'];
      setCoords([latitude, longitude]);
      setChangedCoords([latitude, longitude]);
      setMapData(state['searchData']);
      setLoading(false);
    } else {
      return;
    };
  }, [state]);
  // - search data end -

  // - map -
  const markers = mapData.map((el, index) => {
    const { latitude, longitude } = el['geocodes']['main'];
    const coords = [latitude, longitude];
    return (
      <Marker position={coords} key={index}>
        <Popup>{el['name']}</Popup>
      </Marker>
    );
  });

  const ChangeMapCenter = ({ position }) => {
    const map = useMap();
    map.panTo(position);
    return null;
  };
  const initialCenter = coords;
  // - map end -

  // showModal
  const [checked, setChecked] = useState(false)
  const toggleChecked = () => setChecked(value => !value);
  const [restranData, setRestranData] = useState([])
  // console.log(restranData)
const showModal = (props) => {
  toggleChecked()
  setRestranData(props)
}

  return (
    <>
      {initialLoading ? <Loading /> : <section className={classes['map-contents']}>
        {loading ? <div className={classes['loading']}><Loading /></div> : ''}
        <Navigation />
        <section className={classes['wrapper']}>
          <MapContainer
            center={initialCenter}
            zoom={mapZoomLevel}
            scrollWheelZoom={false}
            className={classes.map}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ChangeMapCenter position={changedCoords} />
            <div className={classes['form']}>
              <FormInput setLoading={setLoading} />
            </div>
            {markers}
          </MapContainer>
          <section className={classes['restranBx']}>
            <div>
              <h2>Nearby&nbsp;Restaurants</h2>
              <Link to="/restaurantList" state={{mapData}}>See&nbsp;All</Link>
            </div>
            <ul className={classes['restran-list']}>
              {mapData.slice(0, 3)['map']((list, index) => (
                <li key={index} className={classes['restran-list__detail']} onClick={() => showModal(list)}>
                  <span className={classes['restranBx__imgBx']}>
                    <img src={list['imagesUrl']} alt={list['name']} />
                  </span>
                  <div className={classes['restranBx__txtBx']}>
                    <h3>{list['name']}</h3>
                    <p>3.5<img src={fullStar} /><img src={fullStar} /><img src={fullStar} /><img src={halfStar} />&#40;101&#41;</p>
                    <p>{list['location']['formatted_address'].length > LENGTHSIZE ? `${list['location']['formatted_address'].substring(0, LENGTHSIZE) + '...'}` : `${list['location']['formatted_address']}`}</p>
                    <p>₱₱</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </section>
        {checked ? <div className={classes['modal']}>
            <section className={classes['inner']}>
            <button className={classes['inner__closeBtn']} onClick={toggleChecked}>✖️</button>
            <div className={classes['inner__contentsBx']}>
            <div className={classes['imageBx']}>
              <img src={restranData['imagesUrl']} alt={restranData['name']} />
              </div>
              <div className={classes['inner__contents']}>
                <h2>{restranData['name']}</h2>
                <p>3.5<img src={fullStar} /><img src={fullStar} /><img src={fullStar} /><img src={halfStar} />&#40;101&#41;</p>
                <p className={classes['pp']}>₱₱</p>
                <div className={classes['inner__bx']}>
                <p><img src={locationSvg} />{restranData['location']['formatted_address']}</p>
                <p><img src={CategorySvg} />
                {restranData.categories.length > 0 ? restranData.categories.map((list, index) => (
                  <React.Fragment key={index}>{list.name}</React.Fragment>
                )): ''}
                </p>
                </div>
                <button className={classes['inner__button']}>Save to My List</button>
              </div>
            </div>
      </section>
      </div> : 
      ''}
        <Footer />
      </section>
      }
    </>
  )
}

export default Map;