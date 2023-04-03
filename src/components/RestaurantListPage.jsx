import Navigation from "./layout/Navigation";
import Footer from "./layout/Footer";
import bgImage from "../assets/illustrations/2.svg"

const RestaurantListPage = () => {
  return (
    <div className="restaurantlist">
        <Navigation />
        <div className="restaurantlist__mainContent">
            <div className="restaurantlist__listBg">
                <img src={bgImage} alt="" />
            </div>
            <div className="restaurantlist__listContent">
                <h2>No Results Found</h2>
                <p>We're sorry to say that there are currently no restaurants in the location you searched for.</p>
                <input type="text" placeholder="🔍 Please enter a location to find restaurants"/>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default RestaurantListPage