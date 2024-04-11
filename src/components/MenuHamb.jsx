import { useState } from "react";
import "../styles/MenuHamb.css";
import "animate.css";

export function MenuHamb() {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    setActive(!active);
  };

  return (
    <>
      <span
        className={!active ? "menu-hamb" : "menu-hamb menu-hamb-on"}
        onClick={handleActive}
      ></span>
      <nav
        className={
          !active
            ? "nav-mobile animate__animated animate__fadeOut aniomate__faster nav-mobile-off"
            : "nav-mobile animate__animated animate__fadeIn aniomate__faster"
        }
      >
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Políticas y términos</a>
          </li>
          <li>
            <a href="#">Testimonios</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
