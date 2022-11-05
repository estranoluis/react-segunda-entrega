import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
   const {cart, addItem, removeItem, clear} = useContext(CartContext);
   const [localCart, setLocalCart] = useState([]);

   useEffect(() => {
      const cartJuegos = cart.map(juego => 
         <div className="row my-4 cart-card" key={juego.id}>
            <div className="col-md-2">
               <img className="img-fluid" src={juego.img} alt={juego.titulo} />
            </div>
            <div className="col-md cart-details">
               <div className="card-body">
                  <h5 className="card-title">{juego.titulo}</h5>
                  <p className="card-text">Precio: ${juego.precio}</p>
                  <p className="card-text">Cantidad: {juego.cantidad}</p>
                  <div>
                     <p className="card-text subtotal">Subtotal: ${juego.precio * juego.cantidad}</p>
                     <button onClick={() => removeItem(juego)} className="btn btn-danger">Eliminar</button>
                  </div>
               </div>
            </div>
         </div>)
      setLocalCart(cartJuegos)
   }, [cart]);

   if(cart.length !== 0) {
      return (
         <>
            <div className="container">
               <div className="cart-list">
                  <h2>Resumen de la compra</h2>
                  {localCart}
               </div>
               <div className="total-price">
                  <h3>Total a pagar: ${cart.reduce((total, juego) => total + (juego.precio * juego.cantidad), 0)}</h3>
               </div>
               <div className="purchase-options">
                  <button onClick={() => clear()} className="btn btn-danger">Vaciar carrito</button>
                  <Link to={`/checkout`}><button className="btn btn-success">Confirmar compra</button></Link>
               </div>
            </div>
         </>
      )
   } else {
      return (
         <>
            <div className="container empty-cart">
               <h1 className="empty-cart__message">El carrito esta vacio</h1>
               <button className="btn empty-cart__btn"><Link to={`/`}>Volver al catalogo</Link></button>
            </div>
         </>
      )
   }
}

export default Cart;
