// import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import heroImg from "../assets/illustrations/1.svg";
import classes from "./LandingPage.module.scss";
import Form from "../components/Form";

const LandingPage = () => {
  const [showForm, setShowForm] = useState(false);

  const renderForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <Navigation />
      <header className={classes.hero}>
        <div className={classes.heroContainer}>
          <article className={classes.heroImage}>
            <img src={heroImg} alt="" />
          </article>
          <article className={classes.heroInfo}>
            <h1>Find the Best Restaurants with Ease</h1>
            <p>
              4 Foodies is a user-friendly restaurant finder website that helps
              you find the best places
            </p>
            <button onClick={renderForm}>Explore Locations</button>
            {showForm && (
              <div>
                <Form />
              </div>
            )}
          </article>
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
      </header>
      <Footer />
    </>
  );
};

export default LandingPage;
