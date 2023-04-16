import { Link } from "react-router-dom";
import classes from "./ErrorPage.module.scss";
import PageNotFound from "../assets/illustrations/404icon.svg";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
const ErrorPage = () => {
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <>
      <Navigation />
      <div className={classes["error-page"]}>
        <div className={classes["error-page-container"]}>
          <img src={PageNotFound} alt="Oops! Page Not Found" />
          <div className={classes["error-page-info"]}>
            <h3>Oops! Page Not Found</h3>
            <p>
              We're sorry, but the page you are looking for could not be found.
              It's possible that the page has been removed, renamed, or is
              temporarily unavailable.
            </p>
            <button onClick={handleClick}>go back to home</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
