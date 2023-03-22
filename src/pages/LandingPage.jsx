import { Link } from "react-router-dom";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";

const LandingPage = () => {
  return (
    <>
      <Navigation />
      <h1>Landing Page(Khemmie) component will be displayed here</h1>

      <p>(For development purpose links to each pages are below)</p>
      <ul>
        <li>
          <Link to="/map">Map Page</Link>
        </li>
        <li>
          <Link to="/error">Error Page</Link>
        </li>
        <li>
          <Link to="/form">Form Page</Link>
        </li>
      </ul>

      <Footer />
    </>
  );
};

export default LandingPage;
