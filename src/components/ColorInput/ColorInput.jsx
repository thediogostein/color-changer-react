import { useState } from 'react';
import styles from './ColorInput.module.css';

const ColorInput = ({ color, setColor, setIsDarkText }) => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={`wrapper  ${styles['color-input']} `}
    >
      <label className={styles['sr-only']}>Type a color name</label>
      <input
        autoFocus
        required
        className="styling-components"
        placeholder="Add color name"
        onChange={(e) => setColor(e.target.value)}
        value={color}
      />
      <button type="button" onClick={() => setIsDarkText((prev) => !prev)}>
        Toggle color
      </button>
    </form>
  );
};

export default ColorInput;
