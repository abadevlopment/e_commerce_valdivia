import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../../ItemCount/ItemCount';
import { useCartContext } from '../../../Context/CartContext'


const Item = ({item}) => {
  const {addtoCart} = useCartContext()

  const sendAdd = (setCount) => {
      addtoCart(item,setCount)
  }

return (
      <div className='card' id='card' >
        <Link to={`/detail/${item.id}`} id='link1'>
          <div className='card-header text-center fw-bolder' id='card-header' >{item.title} </div>
          <div className='card-body img'>
            <img src= {item.pictureUrl} className='card-img-top' alt='imagen producto'/>
          </div>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item text-center fw-bolder text-danger fs-5'>S/. {item.price}.00</li>
            <li className='list-group-item text-center'>Categoría: {item.category}</li>
          </ul>
        </Link>
          <div className='card-footer'>
            {(item.stock > 0) ?
              <ItemCount stock = {item.stock} initial = {1} onAdd = {sendAdd}/>
            :
              <button  className='btn btn-danger fw-bolder fs-6' disabled>
                Stock no disponible
              </button>
            }
          </div>
      </div>
  );
};

export default Item;
