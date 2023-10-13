// components/ShowMore.js

import { useState } from 'react';

const ShowMore = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMoreItems = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/items'); // API route URL
      const data = await response.json();
      setItems([...items, ...data]);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={fetchMoreItems} disabled={loading}>
        {loading ? 'Loading...' : 'Show More'}
      </button>
    </div>
  );
};

export default ShowMore;
