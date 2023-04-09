import Navigation from "../components/layout/Navigation"
import Footer from "../components/layout/Footer"
import aboutImage from "../assets/illustrations/4.svg"
import profiledata from "./profiledata"
import searchIcon from "../assets/aboutIcons/search.svg"
import infoCircle from "../assets/aboutIcons/infoCircle.svg"
import worldIcon from "../assets/aboutIcons/world.svg"
import hourGlass from "../assets/aboutIcons/hourglass.svg"
import githubIcon from "../assets/aboutIcons/github.svg"
import linkedinIcon from "../assets/aboutIcons/linkedin.svg"

const About = () => {
    const profileElement = profiledata.map(info => (
        <div className="about__profileCard" key={info.id}>
            <img src={info.profilePic} alt="" className="about__avatar"/>
            <h5>{info.name}</h5>
            <p>{info.role}</p>
            <a href={info.github} target="_blank"><img src={githubIcon} alt="" /></a>
            <a href={info.linkedin} target="_blank"><img src={linkedinIcon} alt="" /></a>
        </div>
    ))

  return (
    <div className="about">
        <Navigation />
        <div className="about__topInfo">
            <h2>From Idea to Reality</h2>
            <p>4foodies began when a group of talented developers from around the world participated in Chingu Voyage, a 6-week program where participants work in small teams to build a real-world project from scratch.</p>
            <a href="https://chingu.io" target="_blank">learn more about chingu</a>
        </div>
        <div className="about__image">
            <img src={aboutImage} alt="" />
        </div>
        <div className="about__midContent">
            <h3>Why choose us?</h3>
            <div className="about__cardContainer">
                <div className="about__card">
                    <img src={searchIcon} alt="" />
                    <h4>Find Restaurants Quickly and Easily</h4>
                    <p>you can easily search for nearby restaurants based on your location and preferences.</p>
                </div>
                <div className="about__card">
                    <img src={infoCircle} alt="" />
                    <h4>Detailed Restaurant Information</h4>
                    <p>provides detailed information on each restaurant, reviews, categories, This helps users make informed decisions about where to eat.</p>
                </div>
                <div className="about__card">
                    <img src={worldIcon} alt="" />
                    <h4>Save Time and Hassle</h4>
                    <p>you no longer need to waste time browsing multiple websites or walking around aimlessly looking for a place to eat.</p>
                </div>
                <div className="about__card">
                    <img src={hourGlass} alt="" />
                    <h4>Map View</h4>
                    <p>includes a map view that shows the location of each restaurant, making it easy to find nearby options and plan your route.</p>
                </div>
            </div>
            </div>
            <div className="about__team">
                <h3>Team members</h3>
                <div className="about__container">
                    {profileElement}
                </div>
        </div>
        <Footer />
    </div>
  )
}

export default About