import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact" id="contact">
      <h1>Contacto</h1>
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-content">
            <i className="fas fa-usercircle icon"></i>
            <h2>INFORMACIÓN DE CONTACTO</h2>
            <p>
              <i className="fas fa-envelope"></i>
              syzapataho@gmail.com
            </p>
            <p>
              <i className="fas fa-phone"></i>
              +57 301 2165432
            </p>
          </div>
        </div>
        <div className="contact-form">
          <h2>Envía tu Mensaje</h2>
          <form action="">
            <input type="text" placeholder="Nombre" required />
            <input type="text" placeholder="Apellido" required />
            <input type="email" placeholder="Correo electrónico" required />
            <textarea name="" id="" placeholder="Mensaje" required></textarea>
            <button type="submit">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
