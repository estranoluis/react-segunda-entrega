import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { createOrdenCompra } from '../../utils/firebase';

const Checkout = () => {
   const {cart, addItem, removeItem, clear} = useContext(CartContext);
   const [venta, setVenta] = useState(false);
   const [idCompra, setIdCompra] = useState('');
   const [formData, setFormData] = useState({
      nombre: '',
      apellido: '',
      telefono: '',
      email: '',
   });

   const handleChangeInput = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value})
   }

   const handleSubmitForm = (e) => {
      e.preventDefault()

      createOrdenCompra(
         formData.nombre,
         formData.apellido,
         formData.telefono,
         formData.email,
         (cart.reduce((total, juego) => total + (juego.precio * juego.cantidad), 0))
      ).then(orden => {
         setVenta(true)
         setIdCompra(orden.id)
      })
   }

   return (
      <>
         <div className="container checkout">
            {
               !venta
               ?  
                  <>
                     <h2>Complete con sus datos para finalizar</h2>
                     <form onSubmit={handleSubmitForm} className="confirm-form">
                        <div className="mb-2">
                           <label htmlFor="Nombre" className="form-text">Nombre</label>
                           <input type="text" className="form-control" name="nombre" value={formData.nombre} onChange={handleChangeInput} required />
                        </div>
                        <div className="mb-2">
                           <label htmlFor="Apellido" className="form-text">Apellido</label>
                           <input type="text" className="form-control" name="apellido" value={formData.apellido} onChange={handleChangeInput} required />
                        </div>
                        <div className="mb-2">
                           <label htmlFor="Telefono" className="form-text">Telefono</label>
                           <input type="text" className="form-control" name="telefono" value={formData.telefono} onChange={handleChangeInput} required />
                        </div>
                        <div className="mb-2">
                           <label htmlFor="Email" className="form-text">Email</label>
                           <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChangeInput} required />
                        </div>
                        <div className="form-confirm">
                           <input type="submit" className="btn btn-success" disabled={[formData.nombre, formData.apellido, formData.telefono, formData.email].includes('')} value="Confirmar" />
                        </div>
                     </form>
                  </>
               :
                  <div className="purchase-section">
                     <h2 className="purchase-section__title">Su compra fue realizada con exito</h2>
                     <h4>Orden de compra: <span>{idCompra}</span></h4>
                     <Link to={`/`}><button onClick={() => clear()} className="btn btn-primary">Volver al catalogo</button></Link>
                  </div>
            }
         </div>
      </>
   );
}

export default Checkout;
