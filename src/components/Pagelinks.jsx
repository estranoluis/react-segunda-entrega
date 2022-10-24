import React from 'react';

const Pagelinks = () => {
   return (
      <>
      <li className="nav-item">
         <a className="nav-link active" href="http://www.google.com">Home
            <span className="visually-hidden">(current)</span>
         </a>
      </li>
      <li className="nav-item">
         <a className="nav-link" href="http://www.google.com">Novedades</a>
      </li>
      </>
   );
}

export default Pagelinks;
