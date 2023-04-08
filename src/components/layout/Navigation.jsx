import { useContext, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo";

import { ModalContext } from "../../store/ModalContext";

export const SmallMenu = () => {
  const { closeModal } = useContext(ModalContext);

  return (
    <div id="small-navigation" onClick={closeModal}>
      <div className="small-navigation__menu">
        <Logo className="navigation__title" />

        <div className="small-navigation__list">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "small-navigation__item small-navigation__active"
                : "small-navigation__item small-navigation__inactive"
            }
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "small-navigation__item small-navigation__active"
                : "small-navigation__item small-navigation__inactive"
            }
          >
            About
          </NavLink>
        </div>
      </div>
      <div className="small-navigation__backdrop">&nbsp;</div>
    </div>
  );
};

const Navigation = () => {
  //ModalContext
  const { isOpen, openModal } = useContext(ModalContext);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  const openMenuHandler = () => {
    openModal();
    console.log("small menu opened");
  };

  //MQ
  const isDesktop = useMediaQuery({
    query: "(min-width: 600px)",
  });

  //MENU
  const smallMenu = (
    <div className="navigation__button" onClick={openMenuHandler}>
      <span className="navigation__icon">&nbsp;</span>
    </div>
  );

  const bigMenu = (
    <ul className="navigation__list">
      <li className="navigation__item">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="navigation__item">
        <NavLink to="/about">About Us</NavLink>
      </li>
    </ul>
  );

  return (
    <header className="navigation">
      <div className="navigation__container">
        <Logo className="navigation__title" />

        {!isDesktop && smallMenu}
        {isDesktop && bigMenu}
      </div>
    </header>
  );
};

export default Navigation;
