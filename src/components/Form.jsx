import { useRef } from "react";
import Search from "../assets/Search";
import Discovery from "../assets/Discovery";

//later replace w/ real data
const DUMMY_SUGGESTIONS = [
  {
    id: "ind",
    location: "Indonesia",
  },
  { id: "ph", location: "Philippines" },
  { id: "kr", location: "Korea" },
  { id: "jpn", location: "Japan" },
];

const Form = () => {
  const locationRef = useRef();

  const onSubmitLocationHandler = (e) => {
    e.preventDefault();
    const enteredLocation = locationRef.current.value;
    console.log(enteredLocation);
  };

  const onCancelLocationHandler = () => {
    console.log("canceled location!");
  };

  const suggestedLocationsList = DUMMY_SUGGESTIONS.map((el) => {
    const moveToSuggestedCityHandler = () => {
      console.log("Selected location is " + el.location);
    };

    return (
      <li key={el.id} onClick={moveToSuggestedCityHandler}>
        <Discovery className="location__discovery-icon" />
        <span className="location__suggested">{el.location}</span>
      </li>
    );
  });

  return (
    <>
      <section className="form">
        <div className="location">
          <form onSubmit={onSubmitLocationHandler} className="location__form">
            <Search className="location__search-icon" />
            <input
              type="text"
              placeholder="Search for location..."
              className="location__input"
              ref={locationRef}
            />
          </form>
          <button
            type="button"
            className="location__cancel-button"
            onClick={onCancelLocationHandler}
          >
            cancel
          </button>
        </div>

        <h1 className="location__title">Suggested Locations</h1>
        <hr className="location__border" />

        <ul className="location__ul">{suggestedLocationsList}</ul>
      </section>
    </>
  );
};

export default Form;
