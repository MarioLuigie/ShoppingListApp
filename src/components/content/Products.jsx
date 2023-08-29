import React, { useContext } from 'react';
import Product from './Product';
import { Context } from '../../Store';
import textContent from "../../data/textContent.json";
import './Products.scss';

export default function Products() {

  const { products } = useContext(Context);
  const { list } = textContent;

  return (
    <ul className="products">
      {products.length > 0 
        ? products.map((product) => {
            return (
              <Product
                key={product.id}
                id={product.id}
                body={product.body}
                quantity={product.quantity}
              />
            );
          })
       : <li>{list.msg}</li>  
      }
    </ul>
  );
}
