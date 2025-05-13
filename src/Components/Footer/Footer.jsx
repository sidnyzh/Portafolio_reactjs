import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <hr />
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/sidny-zapata-hoyos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
      <p>Copyright {currentYear} sidnyzh.dev -Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
