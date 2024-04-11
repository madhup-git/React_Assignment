import React, { useState } from 'react';
import "./style.css";


const Input = () => {

    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState([]);

    const handlingAddItem = () => {
        if (inputValue.trim() !== '') {
          setItems(prevItems => [...prevItems, inputValue]);
          setInputValue('');
        };
};

return(
    <div className="assignment-container">
        <div className="input-section">
        <input
          type="text"
          value={inputValue}
          onChange={(a) => setInputValue(a.target.value)}
          placeholder="Enter item"
          className="input-field"
        />  
        <button onClick={handlingAddItem} className="add-button">Add</button>
      </div>

      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index} style={{ background: (index + 1) % 5 === 0 ? 'blue' : 'transparent' }} className="item">
            {item}
          </li>
        ))}
      </ul>

    </div>
);
}

export default Input ;