import React from "react";

// Importaciones de imágenes que NO son bg
import logo from "../assets/icons/logo.png";
import githubIcon from "../assets/images/github.png";
import igLogo from "../assets/icons/ig-logo.png";

const FooterComponent = () => {
  // Función para manejar links que todavía no existen
  const handleSoon = (e) => {
    e.preventDefault(); // evita que intente navegar
    alert("Próximamente 🚀");
  };

  return (
    <footer className="w-full h-[250px] p-4 bg-[url(/src/assets/images/fondo_light.png)] bg-no-repeat bg-cover bg-center text-white flex">
      <div className="w-[30%] flex items-center justify-start pl-10">
        <img
          className="h-[200px] w-auto object-contain"
          src={logo.src}
          alt="Logo"
        />
      </div>
      <div className="w-[70%] grid grid-cols-4 gap-2 text-lg font-bold">
        <div className="footer_div">
          <p className="footer_tittle">ATTENTION</p>
          <a href="#" onClick={handleSoon} className="footer_link">
            Report a bug
          </a>
          <a href="#" onClick={handleSoon} className="footer_link">
            Request a feature
          </a>
          <a href="#" onClick={handleSoon} className="footer_link">
            Contact support
          </a>
        </div>
        <div className="footer_div">
          <p className="footer_tittle">MODS</p>
          <a href="#" onClick={handleSoon} className="footer_link">
            About mods
          </a>
        </div>
        <div className="footer_div">
          <p className="footer_tittle">LINKS</p>
          <a href="#home" className="footer_link">
            Home
          </a>
          <a href="#about" className="footer_link">
            About
          </a>
          <a href="#tech" className="footer_link">
            Technologies
          </a>
          <a href="#download" className="footer_link">
            Download
          </a>
        </div>
        <div className="footer_div">
          <p className="footer_tittle">SOCIAL</p>
          <a
            target="_blank"
            href="https://github.com/NoGisul-22/Juego-2D-PixelArt"
          >
            <img className="footer_img" src={githubIcon.src} alt="GitHub" />
          </a>
          <a target="_blank" href="https://instagram.com/yourprofile">
            <img className="footer_img" src={igLogo.src} alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
