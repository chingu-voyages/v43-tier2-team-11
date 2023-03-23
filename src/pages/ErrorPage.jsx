import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";
import classes from "./ErrorPage.module.scss";

const ErrorPage = () => {
  const handleClick = () => {
    window.location.href = "http://localhost:5173/form";
  };
  return (
    <div className={classes.errorPage}>
      <div className={classes.navbar}>
        <img src=".././4foodies.svg" />
        <div className={classes.links}>
          <Link to="/" className={classes["links__home"]}>
            HOME
          </Link>
          <Link to="/map" className={classes["links__aboutUs"]}>
            ABOUT US
          </Link>
        </div>
      </div>
      <div className={classes.descriptions}>
        <img src=".././public/404icon.svg" alt="" />
        <div className={classes.title}>Oops! Page Not Found</div>
        <br />
        <div className={classes.text}>
          We're sorry, but the page you are looking for could not be found. It's
          possible that the page has been removed, renamed, or is temporarily
          unavailable.
        </div>
        <button className={classes.button} onClick={handleClick}>
          go back to home
        </button>
      </div>
      <div className={classes.footer}>
        Copyright © 2023 4Foodies. All rights reserved
      </div>
    </div>
  );
};

export default ErrorPage;
