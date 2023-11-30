// Navigation.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="relative h-32 w-32">
      <nav className="absolute inset-x-0 top-0 h-16 ...">
        <ul>
          <li>
            <Link to="/">Beranda</Link>
          </li>
          <li>
            <Link to="/tentang">Tentang Kami</Link>
          </li>
          <li>
            <Link to="/acara">Acara</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
