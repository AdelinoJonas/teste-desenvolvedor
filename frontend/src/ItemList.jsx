import React from 'react';
import './list.css'; 

function ItemList({ items, deleteItem, setCurrentItem }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.name}</span>
          <span>{item.description}</span>
          <div className="buttons">
            <button onClick={() => setCurrentItem(item)}>Edit</button>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
