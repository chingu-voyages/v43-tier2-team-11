import React from "react";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import classes from "./NoResultsPage.module.scss";

const NoResultsPage = () => {
  return (
    <div className={classes.mainContainer}>
      <Navigation />
      <div className={classes.contentContainer}>
        <img src="undraw_empty_re_opql.svg" alt="" />
        <div className={classes.content}>
          <div className={classes.noResults}>No Results Found</div>
          <div className={classes.sentence}>
            We're sorry to say that there are currently no
            <br /> restaurants in the location you searched for.
          </div>
          <div className={classes.searchBox}>
            <span className={classes.icon}>
              <img src="search.svg" alt="" />
            </span>
            <input
              type="text"
              placeholder="Please enter a location to find restaurants"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NoResultsPage;
