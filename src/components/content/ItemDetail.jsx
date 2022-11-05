import React from 'react';

const ItemDetail = ({item}) => {
   return (
      <>
         <div className="row my-4 game-details">
            <div className="col-md-4">
               <img className='img-fluid' src={`.${item.img}`} alt={item.titulo} />
            </div>
            <div className="col-md-8">
               <div className="card-body">
                  <h4 className="card-title">{item.titulo}</h4>
                  <p className="card-text">{item.categoria}</p>
                  <p className="card-text">Displonible para: {item.sistemas}</p>
                  <p className="card-text">${item.precio}</p>
                  <button className="btn btn-success">Comprar</button>
               </div>
            </div>
         </div>
      </>
   );
}

export default ItemDetail;
