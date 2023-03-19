import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="/logo1.png" alt="Logo" />
      </div>
      <div className="navbar__search">
        <input type="text" placeholder="Recherche..." />
       
      </div>
      <div className="navbar__right">
        <div className="navbar__cart">
        <img src="/images/panier.png" alt="Panier" />
          <span className="navbar__cart-count"></span>
        </div>
        <div className="navbar__profile">
        <img src="/images/profil.png" alt="Profil " />
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
