import React from 'react';
import { Link } from 'react-router-dom';

const Pagelinks = () => {
   return (
      <>
      <li className="nav-item">
         <Link className='nav-link' to={'/'}>Home<span className="visually-hidden">(current)</span></Link>
      </li>
      </>
   );
}

export default Pagelinks;
