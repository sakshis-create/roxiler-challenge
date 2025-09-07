import React, { useEffect, useState } from 'react';
import authService from '../services/authService';
import storeService from '../services/storeService';

const OwnerDashboard = () => {
  const user = authService.currentUser();
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const data = await storeService.getStoreRatings(user.storeId);
        setRatings(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchRatings();
  }, [user.storeId]);

  return (
    <div>
      <h1>Owner Dashboard</h1>
      <h2>Store Ratings</h2>
      <ul>{ratings.map(r => <li key={r.id}>{r.rating}</li>)}</ul>
    </div>
  );
};

export default OwnerDashboard;
