import React, { createContext, useReducer } from "react";

export const Context = createContext();
export default function StoreProvider ({ children }) {

  const initialProducts = [
    {
      id : "01",
      body : "Milk",
      quantity : 1,
    },
    {
      id : "02",
      body : "Bread",
      quantity : 1,
    },
    {
      id : "03",
      body : "Eggs",
      quantity : 1,
    },
  ];

  const actions = {
    add : "ADD",
    remove : "REMOVE",
    removeAll : "REMOVE_ALL",
    update : "UPDATE"
  }

  const specialCharactersRegex = /[!@#$%^&*()\-_=+[{\]};:'",<.>?\/~|\\`]+/g;

  const processInputValue = inputValue => {
    return inputValue
      .replace(specialCharactersRegex, '')
      .toLowerCase()                      
      .replace(/^\w/, c => c.toUpperCase()); 
  };

  const processIdGenerator = () => (
    `${Date.now()} - ${Math.floor(Math.random() * 1000)}`
  )

  const shoppingListReducer = (products, action) => {

    const { add, remove, removeAll, update } = actions;
    
    switch (action.type) {
      case add :
        if (action.inputValue) {
          const newProduct = {
            id : processIdGenerator(),
            body : processInputValue(action.inputValue),
            quantity : 1,
          };
          return [...products, newProduct];
        } else {
          return products;
        }
      case remove :
        return products.filter(product => product.id !== action.id);
      case removeAll : 
        return [];
      case update :
        return products.map(product => product.id === action.id ? {...product, quantity : action.quantity} : product);
      default :
        throw new Error("Sommething went wrong my sweet heart :/")
    }
  }

  const [products, dispatch] = useReducer(shoppingListReducer, initialProducts);

  const providerValue = {
    actions,
    products,
    dispatch,
  }

  return (
    <Context.Provider value={providerValue}>
      {children}
    </Context.Provider>
  )
}