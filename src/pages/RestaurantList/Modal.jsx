import React from "react";
import classes from "./Modal.module.scss";

const Modal = (props) => {
  if (props.show) {
    return (
      <div
        className={classes["overlay"]}
        onClick={(e) => e.target === e.currentTarget && props.setShow(false)}
      >
        <div className={classes["content"]}>
          <div className={classes["modalContainer"]}>
            <img
              className={classes["closeButton"]}
              src="./public/closeSquare.svg"
              alt=""
              onClick={() => props.setShow(false)}
            ></img>
            <div className={classes["main"]}>
              <img
                className={classes["leftPicture"]}
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              ></img>
              <div className={classes["rightContents"]}>
                <div className={classes["RestaurantName"]}>
                  Wai Ying Fastfood
                </div>
                <div className={classes["RestaurantRate"]}>
                  <div className={classes["rateReview"]}>3.5</div>
                  <div className={classes["rateStars"]}>
                    <img src="./public/star.svg" alt="" />
                    <img src="./public/star.svg" alt="" />
                    <img src="./public/star.svg" alt="" />
                    <img src="./public/star4.svg" alt="" />
                    <img src="./public/star5.svg" alt="" />
                  </div>
                  <div className={classes["reviewNumber"]}>(35)</div>
                </div>
                <div className={classes["RestaurantPriceRange"]}>
                  <img src="./public/priceRange.svg" alt="" />
                </div>
                <div className={classes["RestaurantAddress"]}>
                  <img
                    className={classes["addressIcon"]}
                    src="./public/addressIcon.svg"
                    alt=""
                  ></img>
                  <div className={classes["addressDescription"]}>
                    810 Benavidez Street, Binondo, Manila, 1000 Metro Manila,
                    Philippines{" "}
                  </div>
                </div>
                <div className={classes["RestaurantTel"]}>
                  <img
                    className={classes["telIcon"]}
                    src="./public/telIcon.svg"
                    alt=""
                  ></img>
                  <div className={classes["telDescription"]}>+6322436665</div>
                </div>
                <div className={classes["RestaurantSummary"]}>
                  <img
                    className={classes["summaryIcon"]}
                    src="./public/summaryIcon.svg"
                    alt=""
                  ></img>
                  <div className={classes["summaryDescription"]}>
                    Fast Food, Dim Sum, Filipino
                  </div>
                </div>
                <button className={classes["saveButton"]}>
                  Save to My List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
