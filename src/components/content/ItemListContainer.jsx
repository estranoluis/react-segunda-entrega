import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemList from './ItemList';
import { fetchProductJSON } from '../../utils/functions';

const ItemListContainer = () => {
   const [juegos, setJuegos] = useState([]);
   useEffect(() => {
      fetchProductJSON('./data/juegos.json').then(juegos => {
         const cardJuego = juegos.map(juego => 
            <div className="card card-juego" key={juego.id}>
               <img className='card-img-top' src={juego.img} alt={juego.titulo} />
               <div className="card-body">
                  <h5 className="card-title">{juego.titulo}</h5>
                  <p className="card-text">Categoria: {juego.categoria}</p>
                  <p className="card-text">${juego.precio}</p>
                  <button className="btn btn-dark"><Link className="nav-link" to={`/item/${juego.id}`}>Ver Detalles</Link></button>
               </div>
            </div>)
         setJuegos(cardJuego)
      })
   }, [])

   return (
      <>
         <section className="container my-4">
            <ItemList lista={juegos} />
         </section>
      </>
   );
}

export default ItemListContainer;
