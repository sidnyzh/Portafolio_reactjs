import "./Hero.css";
import photo from "../../assets/Photo.png";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="text-container">
        <span>Hola, soy</span>
        <h1>Sidny Zapata Hoyos</h1>
        <p>
          una desarrolladora .NET apasionada con más de 4 años de experiencia en
          el desarrollo backend. Mi enfoque está en la creación de aplicaciones
          seguras, escalables y de alto rendimiento. Me especializo en el diseño
          de APIs, la optimización de bases de datos, e implementación de
          mecanismos de autenticación y autorización.
        </p>
        <a href="link whatsapp" target="_blank" className="btn">
          Contáctame
        </a>
      </div>
      <div className="image-container">
        <div className="circle-bg"></div>
        <img src={photo} alt="" className="photo" />
      </div>
    </div>
  );
};

export default Hero;
