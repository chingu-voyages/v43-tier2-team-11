import cardDetails from "./cardDetails"
import classes from "./RestaurantCard.module.scss"
import Navigation from "../layout/Navigation"
import Footer from "../layout/Footer"

const RestaurantCard = () => {
 const restaurantDetails = cardDetails.map(data => (
    <div className={classes["restaurant-card"]} key={data.id}>
        <img src={data.image} alt="" />
        <div className={classes["cardContent"]}>
        <h3>{data.name}</h3>
        <p>{data.rating}</p>
        <p>{data.location}</p>
        <p>{data.closes}</p>
        </div>
    </div>
 ))

  return (
    <div className={classes["main-container"]}>
        <Navigation />
        <div className={classes['card-container']}>
            <button className={classes.navBack}>&larr;</button>
        <h2 className={classes.cardHeading}>Nearby Restaurants</h2>
        <div className={classes["dataCard"]}>
        {restaurantDetails}
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default RestaurantCard