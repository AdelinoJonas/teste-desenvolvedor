import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemForm from './ItemForm';
import ItemList from './ItemList';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
});

function App() {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await apiClient.get('/items');
      console.log(response);
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const addItem = async (item) => {
    try {
      const response = await apiClient.post('/items', item);
      console.log('Item added:', response.data);
      fetchItems();
    } catch (error) {
      console.error('Error adding item:', error.response ? error.response.data : error.message);
    }
  };

  const updateItem = async (id, updatedItem) => {
    try {
      const response = await apiClient.put(`/items/${id}`, updatedItem);
      console.log('Item updated:', response.data);
      fetchItems();
    } catch (error) {
      console.error('Error updating item:', error.response ? error.response.data : error.message);
    }
  };

  const deleteItem = async (id) => {
    try {
      await apiClient.delete(`/items/${id}`);
      fetchItems();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className="App">
      <h1>Lista de Itens</h1>
      <ItemForm addItem={addItem} updateItem={updateItem} currentItem={currentItem} setCurrentItem={setCurrentItem} />
      <ItemList items={items} deleteItem={deleteItem} setCurrentItem={setCurrentItem} />
    </div>
  );
}

export default App;
