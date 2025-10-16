import React, { useEffect, useState } from "react";

const DataList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://reacthost-bkfnc5a7hcc3eube.canadacentral-01.azurewebsites.net/api/items")
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h2>Available Items</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} — ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataList;
