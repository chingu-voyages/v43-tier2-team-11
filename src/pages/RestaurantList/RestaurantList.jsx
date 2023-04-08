import cardDetails from "./cardDetails"
import Navigation from "../../components/layout/Navigation"
import Footer from "../../components/layout/Footer"
import { Link } from "react-router-dom"

const RestaurantList = () => {
 const restaurantDetails = cardDetails.map(data => (
    <div className="restaurantlist__optionCard" key={data.id}>
        <img src={data.image} alt="" />
        <div className="restaurantlist__optionContent">
        <h3>{data.name}</h3>
        <p>{data.rating}</p>
        <p>{data.location}</p>
        <p>{data.closes}</p>
        </div>
    </div>
 ))

  return (
    <div className="restaurantlist">
        <Navigation />
        <div className="restaurantlist__wrapper">
            <Link to="/" className="restaurantlist__navBack">&larr;</Link>
        <h2>Nearby Restaurants</h2>
        <div className="restaurantlist__dataCard">
        {restaurantDetails}
        </div>
        </div>
        <div className="restaurantlist__footer">
        <Footer />
        </div>
    </div>
  )
}

export default RestaurantList;