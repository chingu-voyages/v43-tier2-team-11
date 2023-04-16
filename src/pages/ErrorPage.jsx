import { Link } from "react-router-dom";
import classes from "./ErrorPage.module.scss";
import PageNotFound from "../assets/illustrations/404icon.svg";

const ErrorPage = () => {
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <div className={classes.errorPage}>
      <div className={classes.descriptions}>
        <img src={PageNotFound} alt="Oops! Page Not Found" />
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
    </div>
  );
};

export default ErrorPage;
