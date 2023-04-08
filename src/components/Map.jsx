import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import classes from "./Map.module.scss";
import Loading from "./Loading";
import { getMapData } from "./fetch/api"

const Map = () => {
  const [mapData, setMapData] = useState([])
  const [currentLocation, setCurrentLocation] = useState('')
  const [loading, setLodaing] = useState(true)
  const [coords, setCoords] = useState([])
  const mapZoomLevel = 15;

  useEffect(() => {
    if (!loading) {
      getMapData(coords).then((res) => {
        setMapData(res)
      })
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

  const markers = mapData.map((el, index) => {
    const { latitude, longitude } = el['geocodes']['main']
    const coords = [latitude, longitude];
    return (
      <Marker position={coords} key={index}>
        <Popup>{el['name']}</Popup>
      </Marker>
    );
  });

  // - search start -
  // const [searchData, setSearchData] = useState([])
  // const categoryRef = useRef(null)
  // const cityNameRef = useRef(null)

  // const searchBtn = (coords) => {
  //   const cityName = cityNameRef.current?.value
  //   const categoryName = categoryRef.current?.value
  //   if (cityName !== undefined || categoryName !== undefined) {
  //     const searchObj = { categoryName: categoryRef.current?.value, cityName: cityNameRef.current?.value, coords: coords }
  //     getSearchData(searchObj).then((res) => {
  //       setSearchData(res)
  //     })
  //   } else {
  //     return
  //   }
  // }
  // console.log(searchData)
  // - search end -

  return (
    <>
      <label htmlFor="">city name</label>
      <input ref={cityNameRef} type='text' />
      <label htmlFor="">category name</label>
      <input ref={categoryRef} type='text' />
      <button onClick={() => searchBtn(coords)}>ボタン</button>
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