import { useContext, useState } from "react";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import heroImg from "../assets/illustrations/1.svg";
import classes from "./LandingPage.module.scss";
import FormInput from "../components/FormInput";
import Loading from "../components/Loading"

const LandingPage = () => {
  //STATE
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false)

  const renderForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <Navigation />
      {loading ? <Loading /> : ''}
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
            {showForm ? <div className={classes.heroForm}><FormInput setLoading={setLoading} /></div> : <button onClick={renderForm}>Explore Locations</button>}
          </article>
        </div>
      </header>
      <Footer />
    </>
  );
};

export default LandingPage;
