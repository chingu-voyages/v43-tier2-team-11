import { Link } from "react-router-dom";
import Footer from "./../components/layout/Footer";
import Navigation from "./../components/layout/Navigation";
import classes from "./ErrorPage.module.scss";
import PageNotFound from "../assets/illustrations/404icon.svg";

const ErrorPage = () => {
  return (
    <div className={classes.errorPage}>
        <Navigation />
      <div className={classes.descriptions}>
        <div className={classes.imgContent}>
        <img src={PageNotFound} alt="" />
        </div>
        <div className={classes.pageContent}>
        <h3 className={classes.title}>Oops! Page Not Found</h3>
        <br />
        <p className={classes.text}>
          We're sorry, but the page you are looking for could not be found. It's
          possible that the page has been removed, renamed, or is temporarily
          unavailable.
          </p>
          <Link to="/" className={classes.button}>
          go back to home
        </Link>
        </div>
      </div>
      <div className={classes.footer}>
        <Footer />
        </div>
    </div>
  );
};

export default ErrorPage;
