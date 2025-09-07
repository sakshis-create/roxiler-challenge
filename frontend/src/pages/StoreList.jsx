import React, { useEffect, useState } from 'react';
import storeService from '../services/storeService';

const StoreList = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const data = await storeService.getStores();
        setStores(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchStores();
  }, []);

  return (
    <div>
      <h1>Stores</h1>
      <ul>{stores.map(s => <li key={s.id}>{s.name}</li>)}</ul>
    </div>
  );
};

export default StoreList;
