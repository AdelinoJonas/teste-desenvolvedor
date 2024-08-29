import React from 'react';

function ItemList({ items, deleteItem, setCurrentItem }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name}
          <button onClick={() => setCurrentItem(item)}>Edit</button>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
