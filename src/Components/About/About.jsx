import "./About.css";
import photo from "../../assets/Photo.png";

const About = () => {
  return (
    <div className="about-details" id="about">
      <div className="circle-bg"></div>
      <img src={photo} alt="About me" />
      <div className="about-infos">
        <h1>sobre mí</h1>
        <p className="description">
          Me apasiona escribir código limpio y mantenible, y siempre busco
          mejorar mis habilidades técnicas mediante la colaboración con equipos
          multidisciplinarios. En mis proyectos, busco siempre integrar
          servicios de terceros y trabajar de manera eficiente para entregar
          soluciones que sean tanto robustas como fáciles de mantener. Me
          comprometo a aprender de cada experiencia y aportar al crecimiento
          tanto profesional como personal en cada proyecto.
        </p>
        <div className="experience-section">
          <div className="experience">
            <i className="fas fa-plus"></i>
            <span>4</span>
            <p>Años de experiencia</p>
          </div>
          <div className="experience">
            <i className="fas fa-plus"></i>
            <span>6</span>
            <p>Proyectos realizados</p>
          </div>
          <div className="experience">
            <i className="fas fa-plus"></i>
            <span>3</span>
            <p>Trabajos profesionales</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
