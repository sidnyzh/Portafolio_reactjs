import "./Portafolio.css";

const portafolio = () => {
  return (
    <div className="portafolio" id="portfolio">
      <h1>Mis proyectos</h1>
      <div className="portafolio-base">
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="projects-container">
          <a
            href="https://github.com/sidnyzh/Sistema-de-facturaci-n"
            target="_blank"
            rel="noopener noreferrer"
            className="portafolio-link"
          >
            <div className="portafolio-box">
              <i className="fab fa-github"></i>
              <h3>Sistema de facturación</h3>
              <p>
                Aplicación de escritorio desarrollada como proyecto académico en
                Windows forms, compuesta por módulos para la gestión de
                clientes, productos, inventario, facturación y serguridad.
                Permite registrar y administrar clientes, agregar y modificar
                productos con control de stock, generar facturas y actualizar el
                inventario, agregar y modificar clientes. Desarrolladio en un
                arquitectura MVC( modelo - Vista - controlador), con Dapper como
                ORM para acceder a los datos
                <br />
                <strong>Stack:</strong> Windows Forms, SQL Server
              </p>
            </div>
          </a>
          <a
            href="https://github.com/sidnyzh/EMI-technical-test"
            target="_blank"
            rel="noopener noreferrer"
            className="portafolio-link"
          >
            <div className="portafolio-box">
              <i className="fab fa-github"></i>
              <h3>Sitema de gestión de empleados</h3>
              <p>
                Sistema de Gestión de Empleados con enfoque en autenticación y
                autorización seguras mediante JSON Web Tokens (JWT). La
                aplicación sigue una arquitectura en capas con patrones como
                Repository y Dependency Injection (DI). Incluye módulos para
                autenticación, gestión de empleados, manejo de errores global,
                registro de solicitudes, y acceso a datos desacoplado.
                Implementa control de acceso por roles (Admin y User) y expone
                controladores REST para operaciones CRUD sobre empleados y
                usuarios.
                <br />
                <strong>Stack:</strong> ASP.NET Core, Entity Framework Core, SQL
                Server, JWT, Repository Pattern, Dependency Injection
              </p>
            </div>
          </a>

          <a
            href="https://github.com/sidnyzh/Autoglass"
            target="_blank"
            rel="noopener noreferrer"
            className="portafolio-link"
          >
            <div className="portafolio-box">
              <i className="fab fa-github"></i>
              <h3>Sistema de gestión de inventario</h3>
              <p>
                Sistema de Gestión de Productos desarrollado como proyecto
                académico siguiendo una arquitectura en capas y aplicando buenas
                prácticas como el patrón Repository y la inyección de
                dependencias (DI). Permite realizar operaciones CRUD sobre
                productos, implementa validaciones con FluentValidation, manejo
                global de excepciones, y registro de errores. Además, utiliza
                eliminación lógica para mantener un historial de productos
                eliminados sin perder datos en la base de datos.
                <br />
                <strong>Stack:</strong> ASP.NET Core, Entity Framework Core,
                MySQL, FluentValidation, Repository Pattern, Dependency
                Injection
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default portafolio;
