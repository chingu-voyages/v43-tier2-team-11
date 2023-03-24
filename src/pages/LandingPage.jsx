// import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import heroImg from "../assets/illustrations/1.svg"
import classes from "./LandingPage.module.scss"
import Form from "../components/Form"


const LandingPage = () => {
  const [showForm, setShowForm] = useState(false)

  const renderForm = () => {
    setShowForm(!showForm)
  }

  return (
    <div className={classes.mainContainer}>
      <Navigation />
      <div className={classes.home}>
        <div className={classes.hero}>
      <img src={heroImg} alt="" />
      </div>
      <div className={classes.homeContent}>
      <h1 className={classes.homeTitle}>Find the Best Restaurants with Ease</h1>
      <p>4 Foodies is a user-friendly restaurant finder website that helps you find the best places</p>
      <button onClick={renderForm}>Explore Locations</button>
      {showForm && <div>
      <Form />
    </div>}
      </div>
      </div>

      {/* <p>(For development purpose links to each pages are below)</p>
      <ul>
        <li>
          <Link to="/map">Map Page</Link>
        </li>
        <li>
          <Link to="/error">Error Page</Link>
        </li>
        <li>
          <Link to="/form">Form Page</Link>
        </li>
      </ul> */}

      <Footer />
    </div>
  );
};

export default LandingPage;
