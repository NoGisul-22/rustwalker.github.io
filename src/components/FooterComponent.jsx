import React from "react";

const FooterComponent = () => {
  return (
    <footer className="w-full h-[350px] p-4 bg-[#212121] text-white flex">
      <div className="w-[30%] flex items-center justify-start pl-10">
        <img
          className="h-[200px] w-auto object-contain"
          src="/logo.png"
          alt="Logo"
        />
      </div>
      <div className="w-[70%] grid grid-cols-4 gap-2 text-lg font-bold">
        <div className="footer_div">
          <p className="footer_tittle">ATTENTION</p>
          <p className="footer_link">Report a bug</p>
          <p className="footer_link">Request a feature</p>
          <p className="footer_link">Contact support</p>
        </div>
        <div className="footer_div">
          <p className="footer_tittle">MODS</p>
          <p className="footer_link">About mods</p>
        </div>
        <div className="footer_div">
          <p className="footer_tittle">LINKS</p>
          <p className="footer_link">Home</p>
          <p className="footer_link">About</p>
          <p className="footer_link">Technologies</p>
          <p className="footer_link">Download</p>
        </div>
        <div className="footer_div">
          <p className="footer_tittle">SOCIAL</p>
          <a href="https://github.com/NoGisul-22/Juego-2D-PixelArt">
            <img className="footer_img" src="/github.png" alt="GitHub" />
          </a>
          <a href="https://instagram.com/yourprofile">
            <img className="footer_img" src="/ig-logo.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
