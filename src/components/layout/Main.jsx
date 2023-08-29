import React from 'react';
import Controler from "../content/Controler";
import ShoppingList from "../content/ShoppingList";
import "./Main.scss";
 
export default function Main () {

    return (
        <main className="main">
            <ShoppingList />
            <Controler />
        </main>
    )
}

