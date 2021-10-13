import React, { useState } from 'react';

function LabelCategory() {
  const [label, setLabel] = useState([]);

  function addItemToCart(e) {
    const item = e.target.value;
    console.log(item);
    setLabel(cart => [...cart, item]);
  }

  return (
    <div className="app">
      <div className="items">
        <button value="Logistique" onClick={addItemToCart} style={{color: "black"}}>Logistique</button>
        <button value="Finance" onClick={addItemToCart} style={{color: "black"}}>Finance</button>
        <button value="Vente" onClick={addItemToCart} style={{color: "black"}}>Vente</button>
        <button value="Marketing" onClick={addItemToCart} style={{color: "black"}}>Marketing</button>
        <button value="Production" onClick={addItemToCart} style={{color: "black"}}>Production</button>
      </div>
      <div className="items">
        <button value="Gestion de Projet" onClick={addItemToCart} style={{color: "black"}}>Gestion de Projet</button>
        <button value="Management" onClick={addItemToCart} style={{color: "black"}}>Management</button>
        <button value="Service Client" onClick={addItemToCart} style={{color: "black"}}>Service Client</button>
        <button value="Design" onClick={addItemToCart} style={{color: "black"}}>Design</button>
      </div>
      <div className="cart">
        Label Selected : 
        <ul>
          {label.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default LabelCategory;