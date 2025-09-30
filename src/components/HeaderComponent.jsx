import React, { useState } from "react";

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false); // cerrado por defecto

  return (
    <div>
      {/* Header con menú */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[100px]" : "max-h-0"
        }`}
      >
        <div className="header relative w-full h-[100px] bg-[var(--base-bg-color)] text-white p-4 flex items-center z-20">
          <nav className="w-full flex justify-between items-center px-8">
            <ul className="flex justify-between w-full pl-40 pr-40 space-x-4 text-2xl font-bold">
              <li className="nav_links">
                <a href="#home">Home</a>
              </li>
              <li className="nav_links">
                <a href="#about">About</a>
              </li>
              <li className="nav_links">
                <a href="#tech">Technologies</a>
              </li>
              <li className="nav_links">
                <a href="#download">Download</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Botón MENU */}
      <div className="w-full h-auto flex justify-center items-center">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-[200px] h-[50px] bg-[var(--secondary-bg-opacity-color)] rounded-b-[80px] cursor-pointer"
        >
          <p className="flex items-center justify-center h-full text-[var(--black-text-color)] font-bold text-[18px]">
            MENU
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
