import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import bgImage from "../assets/illustrations/2.svg"

const NoResults = () => {
  return (
    <div className="noresults">
        <Navigation />
        <div className="noresults__mainContent">
            <div className="noresults__listBg">
                <img src={bgImage} alt="" />
            </div>
            <div className="noresults__listContent">
                <h2>No Results Found</h2>
                <p>We're sorry to say that there are currently no restaurants in the location you searched for.</p>
                <input type="text" placeholder="🔍 Please enter a location to find restaurants"/>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default NoResults;