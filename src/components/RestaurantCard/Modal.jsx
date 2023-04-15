import React, { useState } from "react";
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
                src={props.data.imagesUrl}
                alt=""
              ></img>
              <div className={classes["rightContents"]}>
                <h3 className={classes["RestaurantName"]}>
                  {props.data.name}
                </h3>
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
                  <p className={classes["addressDescription"]}>
                    {props.data.location.formatted_address}{" "}
                  </p>
                </div>
                <div className={classes["RestaurantTel"]}>
                  <img
                    className={classes["telIcon"]}
                    src="./public/telIcon.svg"
                    alt=""
                  ></img>
                  <p className={classes["telDescription"]}>{props.data.location.postcode}</p>
                </div>
                <div className={classes["RestaurantSummary"]}>
                  <img
                    className={classes["summaryIcon"]}
                    src="./public/summaryIcon.svg"
                    alt=""
                  ></img>
                  <p className={classes["summaryDescription"]}>
                    {props.data.location.locality}
                  </p>
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
