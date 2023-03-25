import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo";

const Navigation = () => {
  const openMenuHandler = () => {
    alert("menu will be implemented later");
  };

  const isDesktop = useMediaQuery({
    query: "(min-width: 600px)",
  });

  //MENU
  const smallMenu = (
    <div className="navigation__button" onClick={openMenuHandler}>
      <span class="navigation__icon">&nbsp;</span>
    </div>
  );

  const bigMenu = (
    <div>
      <header className="navigation__list">
        
        {/* <li className="navigation__item">Home</li>
        <li className="navigation__item">About Us</li> */}
        <NavLink className="navigation__item" to="/">Home</NavLink>
        <NavLink className="navigation__item">About</NavLink>
      </header>
    </div>
  );

  return (
    <>
      <div className="navigation">
        <Logo className="navigation__title" />
      </div>

      {!isDesktop && smallMenu}
      {isDesktop && bigMenu}
    </>
  );
};

export default Navigation;