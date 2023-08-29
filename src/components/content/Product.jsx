import React, { useContext } from "react";
import { Context } from "../../Store";
import './Product.scss';

export default function Product ({
  id,
  body,
  quantity
}) {

  const { actions, dispatch} = useContext(Context);

  const handleRemoveSelfButton = () => {
    dispatch({type : actions.remove, id});
  }

  const updateQuantity = (id, quantity) => () => {
    if (quantity >= 0) dispatch({type : actions.update, id, quantity});
  }

  return (
    <li
      className="product"
    >
      <div className="product__body">
        {body}
      </div>
      <div>
        <button 
          className="miniButton"
          onClick={handleRemoveSelfButton}
        >
          x
        </button>
      </div>
      <div className="miniButtons">
        <button 
          className="miniButton--quantity"
          onClick={updateQuantity(id, quantity - 1)}
        >
          -
        </button>
        <div className="miniButton--quantityCount">{quantity}</div>
        <button 
          className="miniButton--quantity"
          onClick={updateQuantity(id, quantity + 1)}
        >
          +
        </button>
      </div>
    </li>
  )
}