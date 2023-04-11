import { useEffect, useState } from "react";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import classes from "./NoResultsPage.module.scss";
import FormInput from "../components/FormInput"
import Loading from "../components/Loading"

const NoResultsPage = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      console.clear()
    }, 100)
  }, [])

  return (
    <div className={classes.mainContainer}>
      <Navigation />
      {loading ? <Loading /> : ''}
      <div className={classes.contentContainer}>
        <img src="undraw_empty_re_opql.svg" alt="" />
        <div className={classes.content}>
          <div className={classes.noResults}>No Results Found</div>
          <div className={classes.sentence}>
            We're sorry to say that there are currently no
            <br /> restaurants in the location you searched for.
          </div>
          <div>
            <FormInput setLoading={setLoading} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NoResultsPage;
