import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <a href="#" className="footer-logo">
            MA<span className="highlight">.</span>
          </a>
          <p className="footer-text">
            Building intelligent AI solutions that make a difference.
          </p>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Muhammad Abdullah. All rights reserved.</p>
          <p className="footer-credit">
            Designed & Built with passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
