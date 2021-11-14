import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {
  return (    
    <div id='fullCard' className="card" >
      <div id='imgCard' >
        <img src={item.pictureUrl}alt="..."/>
      </div>
      <div id='bodyCard' >
        <div id='cTit'>
          {item.title} 
        </div>
        <div id='cCat'>
          Categoría: {item.category}
        </div>
        <div id='cPri'>
          S/. {item.price}.00
        </div>
        <div id='cSto'>
          Stock: {item.stock}
        </div>
        <div id='cBut' >
          <Link to={`/detail/${item.id}`} className="btn btn-primary" >Detalle del producto</Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
