import { useEffect, useState } from "react";
import "../styles/MenuHamb.css";
import "animate.css";

export function MenuHamb() {
  const [active, setActive] = useState(false);
  const [windw, setWindw] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  const handleResponsive = () => {
    if (window.innerWidth > 700) {
      setWindw(true);
    }
  };

  useEffect(() => {
    handleResponsive();
  }, [windw]);

  return (
    <>
      <span
        className={!active ? "menu-hamb" : "menu-hamb menu-hamb-on"}
        onClick={handleActive}
      ></span>
      <nav
        className={
          !active
            ? `nav-mobile ${
                windw ? "" : "animate__animated"
              } animate__fadeOut aniomate__faster nav-mobile-off`
            : "nav-mobile animate__animated animate__fadeIn aniomate__faster"
        }
      >
        <ul>
          <li>
            <a href="/" title="home">
              Home
            </a>
          </li>
          <li>
            <a
              href="/Politicas-y-Terminos"
              title="políticas y términos"
              target="_blank"
            >
              Políticas y términos de uso
            </a>
          </li>
          {/* <li>
            <a href="#" title="Testimonios" target="_blank">
              Testimonios
            </a>
          </li> */}
          <li>
            <a href="/BlogTemp" title="Blog" target="_blank">
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
