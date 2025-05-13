import "./Navbar.css";
import Logo_light from "../../assets/Logo-light.png";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOPen] = useState(false);

  const handleScroll = (e, sectionId) => {
    e.preventDefault();

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOPen(false);
  };
  return (
    <nav>
      <img src={Logo_light} alt="logo" className="logo" />
      <ul className={menuOpen ? "active" : ""}>
        <li>
          <a href="#" onClick={(e) => handleScroll(e, "hero")}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={(e) => handleScroll(e, "about")}>
            Sobre mí
          </a>
        </li>
        <li>
          <a href="#skills" onClick={(e) => handleScroll(e, "skills")}>
            Habilidades
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={(e) => handleScroll(e, "portfolio")}>
            Portafolio
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
            Contacto
          </a>
        </li>
        <i className="fa-solid fa-xmark" onClick={() => setMenuOPen(false)}></i>
      </ul>
      <i className="fa-solid fa-bars" onClick={() => setMenuOPen(true)}></i>
    </nav>
  );
};

export default Navbar;
