import React from 'react';
import { Link } from 'react-router-dom';
import Pagelinks from '../layouts/Pagelinks.jsx';
import Dropdown from '../layouts/Dropdown.jsx';
import CartWidget from '../layouts/CartWidget.jsx';
import SearchBar from '../layouts/SearchBar.jsx';

const Navbar = () => {
   const dropLista = ["Accion", "Shooter", "Deporte", "Rol", "Lucha"]

   return (
      <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
         <div className="container-fluid">
            <Link className="nav-link navbar-brand" to={'/'}><img src="favicon.ico" width="26px" height="26px" alt="logo"/>  SUMMIT - GAMES</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
               <ul className="navbar-nav me-auto">
                  <Pagelinks />
                  <Dropdown lista={dropLista}/>
               </ul>
               <CartWidget />
               <SearchBar busquedaPlaceholder="Buscar por nombre"/>
            </div>
         </div>
      </nav>
      </>
   );
}

export default Navbar;
