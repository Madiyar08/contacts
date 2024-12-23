import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Promos() {
  const [promotions, setPromotions] = useState([]);
  const [newPromotions, setNewPromotions] = useState(0);

  useEffect(() => {
    fetchPromotions();
    const interval = setInterval(checkNewPromotions, 60000); // Проверка каждую минуту
    return () => clearInterval(interval);
  }, []);

  const fetchPromotions = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/promotions/');
      setPromotions(response.data);
      setNewPromotions(0);
    } catch (error) {
      console.error('Error fetching promotions:', error);
    }
  };

  const checkNewPromotions = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/promotions/');
      const newCount = response.data.length - promotions.length;
      if (newCount > 0) {
        setNewPromotions(newCount);
      }
    } catch (error) {
      console.error('Error checking new promotions:', error);
    }
  };

  return (
    <div className="App">
      <h1>Korzinka Promotions</h1>
      <button onClick={fetchPromotions}>
        Актуальные акции {newPromotions > 0 && `(${newPromotions} новых)`}
      </button>
      <div className="promotions-list">
        {promotions.map(promotion => (
          <div key={promotion.id} className="promotion-card">
            <h2>{promotion.name}</h2>
            <p>{promotion.description}</p>
            <p>Правила: {promotion.rules}</p>
            <p>Начало: {promotion.start_date}</p>
            <p>Окончание: {promotion.end_date}</p>
            <p>Товары: {promotion.products}</p>
            <p>Магазины: {promotion.markets}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Promos;