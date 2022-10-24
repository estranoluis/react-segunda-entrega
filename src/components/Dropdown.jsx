import React from 'react';

const Dropdown = () => {
   return (
      <>
      <li className="nav-item dropdown">
         <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="http://www.google.com" role="button" aria-haspopup="true" aria-expanded="false">Categorias</a>
         <div className="dropdown-menu">
            <a className="dropdown-item" href="http://www.google.com">MMORPG</a>
            <a className="dropdown-item" href="http://www.google.com">Shooter</a>
            <a className="dropdown-item" href="http://www.google.com">Deporte</a>
            <a className="dropdown-item" href="http://www.google.com">Estrategia</a>
            <a className="dropdown-item" href="http://www.google.com">Pelea</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="http://www.google.com">Todos los juegos</a>
         </div>
      </li>
      </>
   );
}

export default Dropdown;
