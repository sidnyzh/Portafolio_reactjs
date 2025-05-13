import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h1>Mis habilidades</h1>
      <div className="skills-base">
        <div className="skills-box">
          <i className="fas fa-laptop-code"></i>
          <h3>Desarrollo Backend (ASP.NET Core)</h3>
          <p>
            Desarrollo de APIs RESTful utilizando ASP.NET Core, implementando
            autenticación JWT y arquitectura en capas.
          </p>
        </div>
        <div className="skills-box">
          <i className="fas fa-database"></i>
          <h3>Bases de Datos (Entity Framework)</h3>
          <p>
            Diseño y gestión de bases de datos con Entity Framework y enfoque en
            el uso de consultas eficientes y validación de datos.
          </p>
        </div>
        <div className="skills-box">
          <i className="fas fa-code-branch"></i>
          <h3>Gestión de Proyectos y Documentación</h3>
          <p>
            Manejo de proyectos con Git y GitHub, asegurando una documentación
            clara y mantenible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
