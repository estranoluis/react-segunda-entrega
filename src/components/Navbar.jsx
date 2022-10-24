import React from 'react';
import Pagelinks from './Pagelinks.jsx';
import Dropdown from './Dropdown.jsx';
import CartWidget from './CartWidget.jsx';
import Form from './Form.jsx';

const Navbar = () => {
   return (
      <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
         <div className="container-fluid">
            <a className="navbar-brand" href="index.html"><img src="favicon.ico" width="28px" height="28px" alt="logo"/> Eshop</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
               <ul className="navbar-nav me-auto">
                  <Pagelinks />
                  <Dropdown />
               </ul>
               <CartWidget />
               <Form busquedaPlaceholder="Buscar por nombre"/>
            </div>
         </div>
      </nav>
      </>
   );
}

export default Navbar;
