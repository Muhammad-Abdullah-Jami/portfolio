import config from '../config';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <a href="#" className="footer-logo">
            {config.company.shortName}<span className="highlight">.</span>
          </a>
          <p className="footer-text">
            Building intelligent AI systems that solve real-world problems.
          </p>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#skills">Expertise</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} {config.company.name}. All rights reserved.</p>
          <p className="footer-credit">
            {config.company.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
