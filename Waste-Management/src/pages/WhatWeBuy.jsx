import React, { useState } from 'react';
import { categories, items } from './buyItems';
import './WhatWeBuy.css';

const WhatWeBuy = () => {
  const [activeCategory, setActiveCategory] = useState('Paper');

  const filteredItems = items.filter(item => item.category === activeCategory);

  return (
    <div className="what-we-buy">
      <h1>WHAT WE BUY?</h1>
      <hr />
      <br />
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category}
            className={activeCategory === category ? 'active' : ''}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="items-grid">
        {filteredItems.map((item) => (
          <div key={item.name} className="item-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">{item.price}</p>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeBuy;