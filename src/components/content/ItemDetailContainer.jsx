import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { fetchProductJSON } from '../../utils/functions';

const ItemDetailContainer = () => {
   const [juego, setJuego] = useState([]);
   const {id} = useParams()
   useEffect(() => {
      fetchProductJSON('../data/juegos.json').then(juegos => {
         const juegoElegido = juegos.find(juegoArray => juegoArray.id === parseInt(id))
         setJuego(juegoElegido)
      })
   }, [])

   return (
      <>
      <div className="container">
         <ItemDetail item={juego}/>
      </div>
      </>
   );
}

export default ItemDetailContainer;
