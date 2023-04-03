import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo";

const Navigation = () => {
  const openMenuHandler = () => {
    alert("menu will be implemented later");
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
        <NavLink to="/">About Us</NavLink>
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
