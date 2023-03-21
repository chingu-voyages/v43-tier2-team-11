import { useRef } from "react";
import Search from "../assets/Search";
import Discovery from "../assets/Discovery";
import classes from "./Form.module.scss";

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
        <Discovery className={classes["location__discovery-icon"]} />
        <span className={classes["location__suggested"]}>{el.location}</span>
      </li>
    );
  });

  return (
    <>
      <section className={classes.form}>
        <div className={classes.location}>
          <form
            onSubmit={onSubmitLocationHandler}
            className={classes["location__form"]}
          >
            <Search className={classes["location__search-icon"]} />
            <input
              type="text"
              placeholder="Search for location..."
              className={classes["location__input"]}
              ref={locationRef}
            />
          </form>
          <button
            type="button"
            className={classes["location__cancel-button"]}
            onClick={onCancelLocationHandler}
          >
            cancel
          </button>
        </div>

        <h1 className={classes["location__title"]}>Suggested Locations</h1>
        <hr className={classes["location__border"]} />

        <ul className={classes["location__ul"]}>{suggestedLocationsList}</ul>
      </section>
    </>
  );
};

export default Form;
