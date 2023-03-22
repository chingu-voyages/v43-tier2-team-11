import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";
import classes from "./ErrorPage.module.scss";

const ErrorPage = () => {
  return (
    <div className={classes.errorPage}>
      <Navigation />
      <h1>404 NOT FOUND</h1>
      <br />
      <h2>Here are some helpful links:</h2>
      <Link to="/map" className={classes.link}>
        Map Page
      </Link>
      <br />
      <br />
      <Link to="/form" className={classes.link}>
        Form Page
      </Link>

      <Footer />
    </div>
  );
};

export default ErrorPage;
