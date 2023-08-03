import { useState } from 'react';
import styles from './ColorInput.module.css';

const ColorInput = ({ color, setColor }) => {
  return (
    <div className={`wrapper  ${styles['color-input']} `}>
      <label className={styles['sr-only']}>Type a color name</label>
      <input
        className="styling-components"
        placeholder="Add color name"
        onChange={(e) => setColor(e.target.value)}
        value={color}
      />
    </div>
  );
};

export default ColorInput;
