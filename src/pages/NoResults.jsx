import { useState } from "react";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import bgImage from "../assets/illustrations/2.svg";
import FormInput from "../components/FormInput"
import Loading from "../components/Loading"

const NoResults = () => {
  const [loading, setLoading] = useState(false)
  return (
    <div className="noresults">
      <Navigation />
      {loading ? <Loading /> : ''}
      <div className="noresults__mainContent">
        <div className="noresults__listBg">
          <img src={bgImage} alt="" />
        </div>
        <div className="noresults__listContent">
          <h2>No Results Found</h2>
          <p>We're sorry to say that there are currently no restaurants in the location you searched for.</p>
          <div>
            <FormInput setLoading={setLoading} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default NoResults;