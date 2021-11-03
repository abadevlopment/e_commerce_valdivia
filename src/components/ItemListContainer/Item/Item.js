import React from "react";

const Item = ({item}) => {
  return (
    
    <div className="card" style={{ width: '18rem' }} key={item.id} >
      <img src={item.pictureUrl} class="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"> {item.title} </h5>
        <p className="card-text"> {item.price} </p>
        <a href="#" className="btn btn-primary">Detalle del producto</a>
      </div>
    </div>
  );
};

export default Item;
